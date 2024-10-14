import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  UserCheck,
  MailIcon,
  MessageSquare,
  UserRoundCheck,
} from "lucide-react";

import { RiSendPlaneLine } from "react-icons/ri";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" placeholder="First Name" id="first-name" />
        <UserCheck
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Input type="name" placeholder="Last Name" id="last-name" />
        <UserRoundCheck
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" id="email" />
        <MailIcon
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message" id="message" />
        <MessageSquare className="absolute right-3 top-3" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-3 max-w-[165px]">
        Let's Talk
        <RiSendPlaneLine size={20} />
      </Button>
    </form>
  );
};

export default Form;
