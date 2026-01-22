import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onTouched",
    });

    const onSubmit = async (data) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: data.name,
                    email: data.email,
                    budget: data.budget,
                    message: data.message,
                },
                publicKey,
            );

            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitError(
                "Failed to send your message. Please try again later.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        YOUR NAME
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            },
                        })}
                        className="mt-2 w-full rounded-lg border border-gray-300/70 bg-slate-50 dark:bg-[#1C2136] dark:border-gray-300/20 dark:text-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-xs font-semibold text-slate-600">
                        EMAIL ADDRESS
                    </label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        className="mt-2 w-full rounded-lg border border-gray-300/70 bg-slate-50 dark:bg-[#1C2136] dark:border-gray-300/20 dark:text-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label className="text-xs font-semibold text-slate-600">
                    ESTIMATED BUDGET
                </label>
                <select
                    {...register("budget", {
                        required: "Please select a budget range",
                    })}
                    className="mt-2 w-full rounded-lg text-slate-600 border border-gray-300/70 bg-slate-50 dark:bg-[#1C2136] dark:border-gray-300/20 dark:text-[#8E8F9B] px-4 py-3 text-sm outline-none"
                >
                    <option value="">Select a range</option>
                    <option value="$1k – $5k">$1k – $5k</option>
                    <option value="$5k – $10k">$5k – $10k</option>
                    <option value="$10k+">$10k+</option>
                </select>
                {errors.budget && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.budget.message}
                    </p>
                )}
            </div>

            <div>
                <label className="text-xs font-semibold text-slate-600">
                    TELL ME ABOUT YOUR PROJECT
                </label>
                <textarea
                    rows={4}
                    placeholder="I need a redesign for my..."
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                        },
                    })}
                    className="mt-2 w-full rounded-lg border border-gray-300/70 bg-slate-50 dark:bg-[#1C2136] dark:border-gray-300/20 dark:text-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {submitSuccess && (
                <p className="text-sm text-center text-green-600">
                    Message sent successfully!
                </p>
            )}

            {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-indigo-600 py-4 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
            >
                {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
        </form>
    );
};

export default ContactForm;
