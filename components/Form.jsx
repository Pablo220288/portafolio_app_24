"use client";

import React, { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { UserCheck, MailIcon, MessageSquare } from "lucide-react";

import { RiSendPlaneLine } from "react-icons/ri";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

import { Link } from "@/navigation";

//Import Next Intl
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations("Contact");

  const [isHovered, setIsHovered] = useState(false);

  const { toast } = useToast();
  return (
    <form
      className="flex flex-col gap-y-4"
      action="https://getform.io/f/bjjjommb"
      method="POST"
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
          await fetch("https://getform.io/f/bjjjommb", {
            method: "POST",
            body: formData,
          });
          toast({
            title: `${t("toast.sending.title")}`,
            description: `${t("toast.sending.description")}`,
            action: (
              <ToastAction altText="Go to dashboard">
                <Link href="/">Go to Home</Link>
              </ToastAction>
            ),
          });
        } catch (error) {
          toast({
            title: `${t("toast.error.title")}`,
            description: `${t("toast.error.description")}`,
            variant: "destructive",
          });
        }
      }}
    >
      <div className="relative flex items-center">
        <Input
          type="name"
          name="name"
          placeholder={`${t("form.name")}`}
          id="name"
          autoComplete="name"
          required
        />
        <UserCheck
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          placeholder={`${t("form.email")}`}
          id="email"
          autoComplete="email"
        />
        <MailIcon
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={20}
        />
      </div>
      <div className="relative flex items-center">
        <Textarea
          name="message"
          placeholder={`${t("form.message")}`}
          id="message"
        />
        <MessageSquare className="absolute right-3 top-3" size={20} />
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          type="submit"
          className={`flex items-center gap-x-3 max-w-[165px] bubbly-button ${
            isHovered ? "animate" : ""
          }`}
        >
          {t("form.submit")}
          <RiSendPlaneLine size={20} />
        </Button>
      </div>
    </form>
  );
};

export default Form;
