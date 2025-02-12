import { Textarea } from "@/components/ui/textarea";

import { Sparkle } from "lucide-react";

export default function Login() {
  return (
    <div className="flex h-5/6   justify-center items-end ">
      {" "}
      <div className="w-1/2 ">
        <Sparkle className="absolute right-0.5 -translate-x-[410px] translate-y-4" />
        <Textarea className="" placeholder="Type your message here." />
      </div>
    </div>
  );
}
