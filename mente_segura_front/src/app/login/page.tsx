"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export default function Login() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, inputMessage]);
    setInputMessage("");
  };
  return (
    <div className="flex flex-col py-14  h-[calc(100%-10%)] justify-between  items-center">
      <div className="flex  items-start justify-star w-1/2">
        <Card className="   bg-transparent border-0 shadow-none mb-4">
          <CardContent className="  p-4">
            {messages.map((message, index) => (
              <div key={index} className=" mb-2 p-2 bg-blue-100 rounded-lg">
                <p className="text-gray-800">{message}</p>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-gray-500 text-center">
                Nenhuma mensagem ainda. Comece a conversa!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      <form onSubmit={handleSubmit} className=" w-1/2 flex gap-2">
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-grow bg-blue-100 "
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
