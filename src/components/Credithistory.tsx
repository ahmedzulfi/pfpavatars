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
        const res = await fetch("http://localhost:5000/api/users/credits-history", {
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
    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-max bg-white/60 backdrop-blur-sm shadow-xs border border-black/7 rounded-xl px-6 py-4">
      <div className="mb-5 pt-3">
        <div className="text-lg flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Credit History
        </div>
        <p className="text-xs text-gray-500">Recent credit transactions</p>
      </div>

      <div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {history.length === 0 && (
            <div className="text-sm text-gray-500 text-center">No history available</div>
          )}

          {history.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    transaction.amount > 0 ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div
                className={`text-sm font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
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
            <div className="w-full justify-center items-center py-3 rounded-lg inline-flex bg-[#ffedc9] hover:bg-[#ffdea6] transition-all duration-305 text-gray-900">
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
