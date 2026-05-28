import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "The Glen Dental",
    tagline: "Dream Smile Starts Here. Confidently.",
    phone: "(669) 257-6347",
    phoneHref: "tel:+16692576347",
    email: "info@theglendental.com",
    address: "123 Main St",
    city: "San Jose",
    serviceAreas: ["San Jose, CA", "Santa Clara, CA", "Campbell, CA"],
    license: "DDS 12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Full Mouth Dental Implants", desc: "Restore your entire smile with permanent, natural-looking dental implants for full functionality and aesthetics.", urgent: false },
    { icon: "clock", title: "Teeth In A Day", desc: "Get a complete new set of teeth in just one visit, transforming your smile quickly and efficiently.", urgent: false },
    { icon: "shield-check", title: "Dental Implants", desc: "Replace missing teeth with durable, long-lasting dental implants that look, feel, and function like natural teeth.", urgent: false },
    { icon: "sparkles", title: "Cosmetic Dentistry", desc: "Enhance your smile's appearance with a range of treatments including whitening, bonding, and smile makeovers.", urgent: false },
    { icon: "heart", title: "Porcelain Veneers", desc: "Achieve a flawless smile with custom-made porcelain veneers that cover imperfections and brighten your teeth.", urgent: false },
    { icon: "scissors", title: "Invisalign® Clear Aligners", desc: "Straighten your teeth discreetly and comfortably with clear, removable aligners, an alternative to traditional braces.", urgent: false },
  ],

  testimonials: [
    { name: "Sarah M.", location: "San Jose, CA", stars: 5, text: "I had a full mouth dental implant procedure at The Glen Dental, and I couldn't be happier with the results. Dr. Bhullar and his team were incredibly professional and made me feel comfortable throughout the entire process. My new smile has given me so much confidence, and I can finally eat all my favorite foods again. Highly recommend their expertise!" },
    { name: "David L.", location: "Santa Clara, CA", stars: 5, text: "After years of avoiding the dentist, I finally decided to get my smile fixed. The Glen Dental offered 'Teeth In A Day,' and it was truly life-changing. The staff was so understanding and supportive, and the procedure was smooth. I walked out with a brand new smile that same day. Thank you for giving me back my confidence!" },
    { name: "Emily R.", location: "Campbell, CA", stars: 5, text: "I came to The Glen Dental for cosmetic dentistry, specifically porcelain veneers. Dr. Henne did an amazing job! She listened to all my concerns and delivered exactly what I envisioned. The office is modern, and the team is friendly and efficient. My smile has never looked better, and I receive compliments all the time." },
  ],

  trustBadges: [
    "AAID Certified", "Experienced Implant Specialists", "Affordable Payment Plans", "Patient-Centric Care", "State-of-the-Art Technology", "Comprehensive Services"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Commitment to Excellence", desc: "We are dedicated to providing the highest standard of dental care with exceptional results." },
    { icon: "shield-check", title: "Implant Specialization", desc: "Our expertise in full mouth dental implants ensures durable and natural-looking solutions." },
    { icon: "thumbs-up", title: "Experienced Doctors", desc: "Benefit from the skill and knowledge of Dr. Aman Bhullar and Dr. Misty Henne." },
    { icon: "home", title: "Comprehensive Services", desc: "From general to cosmetic and oral surgery, we cover all your dental needs under one roof." },
    { icon: "heart", title: "Patient-Centric Approach", desc: "Your comfort and satisfaction are our top priorities, with personalized care plans." },
    { icon: "dollar-sign", title: "Affordable Payment Plans", desc: "We offer flexible financing options to make your dream smile accessible." }
  ],

  formServiceOptions: ["Full Mouth Dental Implants", "Teeth In A Day", "Dental Implants", "Cosmetic Dentistry", "Porcelain Veneers", "Invisalign® Clear Aligners", "General Dentistry", "Family Dentistry", "Dental Crowns", "Dental Bridges", "Full & Partial Dentures", "Oral Surgery", "Tooth Extractions", "Bone Grafting", "IV Sedation Dentistry"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!