"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Footer from "../components/Footer"
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target
      const formData = new FormData(form)

      await fetch("https://formspree.io/f/mzzpwyrl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-1 bg-[#47b8a6] mb-4 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-[#17162c] mb-4">We Would Love to Hear From You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you have any questions or feedback, please feel free to reach out to us. We'll get back to you as soon
              as possible.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Contact Info Section */}
                <div className="md:col-span-2 bg-[#17162c] p-8 text-white">
                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <p className="text-white/70">Reach out to us through the form or via our contact details below.</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#47b8a6]/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#47b8a6]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Email</p>
                        <p className="font-medium">info@glialinitiative.org</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#47b8a6]/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-[#47b8a6]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Social Media</p>
                        <p className="font-medium">@glialinitiative</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#47b8a6]/10 rounded-full -mb-16 -ml-16"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#47b8a6]/10 rounded-full -mt-10 -mr-10"></div>
                </div>

                {/* Form Section */}
                <div className="md:col-span-3 p-8">
                  {isSubmitted ? (
                    <motion.div
                      className="h-full flex flex-col items-center justify-center text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#47b8a6]/10 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-[#47b8a6]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#17162c] mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-4 py-2 bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Name Field */}
                      <motion.div className="mb-6" variants={itemVariants}>
                        <label htmlFor="name" className="block text-[#17162c] text-sm font-medium mb-2">
                          Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#47b8a6] focus:border-transparent transition-all duration-300"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Email Field */}
                      <motion.div className="mb-6" variants={itemVariants}>
                        <label htmlFor="email" className="block text-[#17162c] text-sm font-medium mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#47b8a6] focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div className="mb-6" variants={itemVariants}>
                        <label htmlFor="message" className="block text-[#17162c] text-sm font-medium mb-2">
                          Message
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#47b8a6] focus:border-transparent transition-all duration-300"
                            placeholder="Your message here..."
                            required
                          ></textarea>
                        </div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={itemVariants}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#17162c] text-white px-6 py-3 rounded-lg hover:bg-[#47b8a6] transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              By submitting this form, you agree to our privacy policy and terms of service.
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Contact

