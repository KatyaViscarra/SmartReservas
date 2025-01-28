import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import { Send, Download } from "lucide-react";


const WalletDashboard = () => {
  const transactions = [
    { id: 1, type: "send", amount: "50 SATS", date: "2025-01-27" },
    { id: 2, type: "receive", amount: "150 SATS", date: "2025-01-26" },
    { id: 3, type: "send", amount: "250 SATS", date: "2025-01-25" },
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-xl">
        <CardContent className="text-center">
          <h1 className="text-3xl font-bold mb-2">Bitcoin Wallet</h1>
          <p className="text-lg">Saldo actual:</p>
          <p className="text-4xl font-bold mt-2">45 SATS</p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="flex items-center justify-center gap-2 shadow-md hover:shadow-lg" variant="outline">
          <Download size={18} /> Recibir
        </Button>
        <Button className="flex items-center justify-center gap-2 shadow-md hover:shadow-lg" variant="default">
          <Send size={18} /> Enviar
        </Button>
      </div>

      {/* Recent Transactions */}
      <Card className="shadow-md">
        <CardContent>
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Transacciones recientes</h2>
          <div className="divide-y divide-gray-200">
            {transactions.map((tx) => (
              <motion.div
                key={tx.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                whileHover={{ scale: 1.01 }}
              >
                <div>
                  <p className="font-medium capitalize text-gray-800">{tx.type}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <p className={`font-bold ${tx.type === "send" ? "text-red-500" : "text-green-500"}`}>
                  {tx.amount}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletDashboard;
