"use client";

import React, { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { UserCheck, MailIcon, MessageSquare, Smartphone } from "lucide-react";

import { RiSendPlaneLine } from "react-icons/ri";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

import { Link } from "@/navigation";

//Import Next Intl
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations("Contact");
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const fullName = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validación básica
    if (!fullName || !email || !message) {
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.missing-fields"),
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Validación de email simple
    if (!email.includes("@") || !email.includes(".")) {
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.invalid-email"),
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone: formData.get("phone"),
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: t("toast.success.title"),
        description: t("toast.success.description"),
        action: (
          <ToastAction altText={t("toast.success.action")}>
            <Link href="/">{t("toast.success.action")}</Link>
          </ToastAction>
        ),
      });

      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input
          type="name"
          name="name"
          placeholder={`${t("form.name")}`}
          id="name"
          autoComplete="name"
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
        <Input
          type="text"
          name="phone"
          placeholder={`${t("form.phone")}`}
          id="email"
          autoComplete="phone"
        />
        <Smartphone
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
          {loading ? t("form.sending") : t("form.submit")}
          <RiSendPlaneLine size={20} />
        </Button>
      </div>
    </form>
  );
};

export default Form;
