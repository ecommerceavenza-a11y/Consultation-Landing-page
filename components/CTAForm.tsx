"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, Loader2, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function isValidOptionalUrl(value: string) {
  if (!value.trim()) return true;
  try {
    new URL(value.match(/^https?:\/\//i) ? value : `https://${value}`);
    return true;
  } catch {
    return false;
  }
}

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Please enter a valid WhatsApp number.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 7,
      "Please enter a valid WhatsApp number.",
    ),
  businessName: z.string().trim().min(2, "Please enter your business name."),
  website: z
    .string()
    .trim()
    .refine(isValidOptionalUrl, "Please enter a valid website or Facebook URL."),
  message: z.string().trim().max(2000, "Please keep your message under 2,000 characters."),
  companyWebsite: z.string().max(0),
});

type FormValues = z.infer<typeof formSchema>;

const formSubmitEndpoint = "https://formsubmit.co/ajax/rumbamanjit886@gmail.com";

const fields: Array<{
  name: keyof Pick<FormValues, "fullName" | "email" | "whatsapp" | "businessName" | "website">;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
}> = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Your full name",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Active Email",
    placeholder: "you@business.com",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "whatsapp",
    label: "WhatsApp Number",
    placeholder: "+977 98…",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "businessName",
    label: "Business Name",
    placeholder: "Your business name",
    autoComplete: "organization",
  },
  {
    name: "website",
    label: "Website or Facebook URL",
    placeholder: "yourwebsite.com",
    autoComplete: "url",
  },
];

export function CTAForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      businessName: "",
      website: "",
      message: "",
      companyWebsite: "",
    },
  });

  async function submitForm(values: FormValues) {
    setSubmitError("");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full Name": values.fullName,
          "Active Email": values.email,
          "WhatsApp Number": values.whatsapp,
          "Business Name": values.businessName,
          "Website or Facebook URL": values.website || "Not provided",
          "Anything You Want to Say": values.message || "Not provided",
          _subject: `New consultation request — ${values.businessName}`,
          _template: "table",
          _captcha: "false",
          _url: window.location.href,
        }),
      });
      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };
      const accepted = result.success === true || result.success === "true";

      if (!response.ok || !accepted) {
        throw new Error(result.message || "Your request could not be sent.");
      }

      router.push("/thank-you");
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      setSubmitError(
        message.toLowerCase().includes("activation")
          ? "One-time activation is required. Open the FormSubmit email sent to rumbamanjit886@gmail.com, click “Activate Form,” then submit again."
          : message || "Your request could not be sent. Please try again or message us on WhatsApp.",
      );
    }
  }

  return (
    <section id="consultation-form" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-10rem] h-80 w-80 rounded-full bg-[#f5c84c]/25 blur-3xl" />
      <div className="site-container relative">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#172019]/[0.08] bg-white p-5 shadow-[0_30px_90px_rgba(23,32,25,0.10)] min-[390px]:p-7 sm:p-10 lg:p-12">
          <div className="text-center">
            <p className="eyebrow">Book the call</p>
            <h2 className="display-heading mt-4 text-4xl leading-tight sm:text-5xl">
              One-to-one consultation
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#606b62]">
              Get a customized digital marketing plan for your business with
              practical next steps.
            </p>
          </div>

          <form
            className="mt-9 grid gap-5 sm:grid-cols-2"
            onSubmit={handleSubmit(submitForm)}
            noValidate
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="companyWebsite">Company website</label>
              <input
                id="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                {...register("companyWebsite")}
              />
            </div>

            {fields.map((field) => {
              const error = errors[field.name];
              const optional = field.name === "website";
              return (
                <label
                  key={field.name}
                  className={`form-label ${field.name === "website" ? "sm:col-span-2" : ""}`}
                >
                  {field.label}
                  {optional && (
                    <span className="ml-1 font-normal text-[#79817a]">(optional)</span>
                  )}
                  <input
                    type={field.type || "text"}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${field.name}-error` : undefined}
                    className={`form-field ${error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                    {...register(field.name)}
                  />
                  {error && (
                    <span
                      id={`${field.name}-error`}
                      className="mt-1.5 block text-xs font-medium text-red-700"
                    >
                      {error.message}
                    </span>
                  )}
                </label>
              );
            })}

            <label className="form-label sm:col-span-2">
              Anything You Want to Say
              <span className="ml-1 font-normal text-[#79817a]">(optional)</span>
              <textarea
                rows={5}
                placeholder="Tell me what you want to improve."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`form-field resize-y ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                {...register("message")}
              />
              {errors.message && (
                <span id="message-error" className="mt-1.5 block text-xs font-medium text-red-700">
                  {errors.message.message}
                </span>
              )}
            </label>

            {submitError && (
              <div
                className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800 sm:col-span-2"
                role="alert"
              >
                <AlertCircle aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                <p>{submitError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="primary-cta mt-1 w-full sm:col-span-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Book My Free Consultation
                  <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-[#707970] sm:col-span-2">
              <LockKeyhole aria-hidden="true" className="h-3.5 w-3.5" />
              We respect your privacy. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
