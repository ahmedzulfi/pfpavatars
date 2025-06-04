import { Clock, CreditCard, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function Credithistory() {
  const creditHistory = [
    {
      id: 1,
      date: "June 1, 2025",
      type: "Purchase",
      amount: 75,
      description: "Popular Pack",
    },
    {
      id: 2,
      date: "May 28, 2025",
      type: "Usage",
      amount: -10,
      description: "Avatar Generation",
    },
    {
      id: 3,
      date: "May 15, 2025",
      type: "Usage",
      amount: -10,
      description: "Avatar Generation",
    },
    {
      id: 4,
      date: "May 10, 2025",
      type: "Purchase",
      amount: 25,
      description: "Starter Pack",
    },
    {
      id: 5,
      date: "May 5, 2025",
      type: "Usage",
      amount: -10,
      description: "Avatar Generation",
    },
  ];
  return (
    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-max bg-white/60 backdrop-blur-sm shadow-sm border-black/7 rounded-xl px-6 py-4">
      <div className="mb-5 pt-3">
        <div className="text-lg flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Credit History
        </div>
        <p className="text-xs text-gray-500">Recent credit transactions</p>
      </div>
      <div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {creditHistory.map((transaction) => (
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
          <Link href={""}>
            <div className="w-full  justify-center items-center py-3 rounded-lg inline-flex bg-[#d4c4a8] hover:bg-[#ffedc9]  transition-all duration-305 text-gray-900 ">
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
