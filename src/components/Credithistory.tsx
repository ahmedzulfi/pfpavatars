"use client";

import { useAuth } from "@/context/Authcontext";
import { Clock, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Transaction = {
  id: string;
  amount: number;
  description: string;
  date: string;
};

function Credithistory() {
  const [history, setHistory] = useState<Transaction[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const idToken = await user?.getIdToken();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/credits-history`, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch credit history", error);
      }
    };

    if (user) {
      fetchHistory();
    }
  }, [user]);

  return (
    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-max border border-neutral-900/30 bg-neutral-950/40 backdrop-blur-sm shadow-sm  rounded-xl px-6 py-4">
      <div className="mb-5 pt-3">
        <div className="text-lg flex items-center text-white">
          <Clock className="w-5 h-5 mr-2 text-white" />
          Credit History
        </div>
        <p className="text-xs text-neutral-400">Recent credit transactions</p>
      </div>

      <div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {history.length === 0 && (
            <div className="text-sm text-neutral-400 text-center">No history available</div>
          )}

          {history.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    transaction.amount > 0 ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-neutral-400">{transaction.date}</p>
                </div>
              </div>
              <div
                className={`text-sm font-semibold ${
                  transaction.amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2">
          <Link href={"/purchase"}>
            <div className="w-full justify-center items-center py-3 rounded-lg inline-flex bg-[#ffedc9] hover:bg-[#ffdea6] transition-all duration-300 text-gray-900 font-semibold">
              <CreditCard className="w-4 h-4 mr-2" />
              Purchase More Credits
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Credithistory;
