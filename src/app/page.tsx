"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { CheckCircle, Heart, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Shivshankar Bakery"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Specialties", id: "specialties" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Visit Us", id: "contact" }
          ]}
          button={{ text: "Call Now", href: "tel:08003152800" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Freshly Baked Happiness in Ajmer"
          description="Delicious cakes, pastries, cookies, and bakery favorites made fresh every day. Discover the taste of tradition and quality at Shivshankar Bakery."
          buttons={[
            { text: "View Our Specialties", href: "#specialties" },
            { text: "Visit Bakery", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          imageSrc="http://img.b2bpic.net/free-photo/woman-looking-goodies-local-male-producer_23-2149110805.jpg"
          imageAlt="Fresh cakes and pastries at Shivshankar Bakery"
          showDimOverlay={false}
          ariaLabel="Hero section - Shivshankar Bakery"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Welcome to Shivshankar Bakery"
          description="Established as a trusted neighborhood bakery in Ajmer, Shivshankar Bakery has been serving the community with fresh, high-quality baked goods. We specialize in celebration cakes, pastries, cookies, bread, and traditional cake rusks. Every item is baked fresh daily using premium ingredients, ensuring authentic taste and premium quality that our customers have come to trust."
          tag="About Us"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-girls-buys-buns-bakery_1157-24668.jpg"
          imageAlt="Shivshankar Bakery storefront"
          mediaAnimation="opacity"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          metrics={[
            { value: "Fresh", title: "Baked Daily" },
            { value: "Premium", title: "Quality" },
            { value: "Local", title: "Trusted" }
          ]}
          ariaLabel="About section - Shivshankar Bakery"
        />
      </div>

      <div id="specialties" data-section="specialties">
        <FeatureCardTwentySeven
          title="Our Specialties"
          description="Explore our delicious range of freshly baked items, each crafted with care and premium ingredients."
          tag="Bakery Collection"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              id: "cakes",              title: "Fresh Cakes",              descriptions: [
                "Custom designed celebration cakes for birthdays, anniversaries, and special occasions",                "Celebration cakes with premium frosting and decorative designs",                "Fresh daily baking ensures peak taste and quality"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/female-confectioner-making-meringue-pastry-shop_23-2150360246.jpg",              imageAlt: "Fresh decorated cakes"
            },
            {
              id: "pastries",              title: "Pastries",              descriptions: [
                "Delicious assorted pastries including croissants and Danish pastries",                "Buttery, flaky texture with premium filling options",                "Perfect for breakfast, tea time, or special treats"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/cake-slice-wooden-platter_114579-18537.jpg",              imageAlt: "Assorted fresh pastries"
            },
            {
              id: "cake-rusk",              title: "Cake Rusk",              descriptions: [
                "Traditional Indian cake rusk, perfect with morning chai",                "Homemade quality with authentic taste",                "Popular accompaniment for tea and breakfast"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-cake-sliced-pie-with-raisins-with-cup-coffee-pink-surface-bake-pie-sugar-sweet-biscuit-cookie_140725-55889.jpg",              imageAlt: "Homemade cake rusk"
            },
            {
              id: "cookies",              title: "Cookies",              descriptions: [
                "Fresh baked cookies in various flavors",                "Premium ingredients for authentic homemade taste",                "Great for snacking and sharing"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-with-delicious-cookies-milk_23-2148837099.jpg",              imageAlt: "Fresh baked cookies assortment"
            },
            {
              id: "bread",              title: "Bread & Pao",              descriptions: [
                "Fresh bread and traditional pao for pao bhaji",                "Soft, fluffy texture perfect for any meal",                "Ideal for daily consumption and special meals"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/cupcakes-waffle-sticks-piece-burlap_114579-12115.jpg",              imageAlt: "Fresh bread and pao"
            }
          ]}
          ariaLabel="Specialties section - bakery products"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Customer Reviews"
          description="Hear from our satisfied customers about their experience with Shivshankar Bakery."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Rajesh Sharma",              handle: "Regular Customer",              testimonial: "Be it Cake Rusk or Pao for Pao Bhaji, this place serves some of the best bakery items. Pastries and cakes are delicious and fresh. I visit every week!",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-looking-photographer_23-2148339179.jpg",              imageAlt: "Rajesh Sharma",              icon: Heart
            },
            {
              id: "2",              name: "Priya Patel",              handle: "Local Resident",              testimonial: "Nice shop for cookies and tasty pastries on Nasirabad Road. The quality is consistent, and the staff is friendly. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/positive-customer-approving-new-offer_1262-17151.jpg",              imageAlt: "Priya Patel",              icon: Heart
            },
            {
              id: "3",              name: "Vikram Singh",              handle: "Family Customer",              testimonial: "Good bakery in Ajmer with fresh cakes and a good selection of desserts. Perfect for celebrations and daily treats. We love Shivshankar!",              imageSrc: "http://img.b2bpic.net/free-photo/glad-positive-young-mixed-race-man-with-mustache-beard-smiles-happily_273609-8697.jpg",              imageAlt: "Vikram Singh",              icon: Heart
            },
            {
              id: "4",              name: "Meera Gupta",              handle: "Verified Visitor",              testimonial: "Fresh products, excellent service, and beautiful presentation. Shivshankar Bakery is my go-to place for all bakery needs. Truly premium quality!",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-woman-gladly-smiling-pink-wall_179666-2595.jpg",              imageAlt: "Meera Gupta",              icon: Heart
            }
          ]}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="visit-us" data-section="visit-us">
        <ContactSplitForm
          title="Visit Shivshankar Bakery"
          description="Located on Nasirabad Road in Nagra, Ajmer. We're open every day at 10:00 AM. Stop by to experience the freshness and quality of our baked goods."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/zero-waste-merchandise-supermarket_482257-76704.jpg"
          imageAlt="Shivshankar Bakery interior"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "email", type: "email", placeholder: "Your Email" }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your visit or inquiry", rows: 4 }}
          buttonText="Send Inquiry"
          ariaLabel="Visit us section - contact information"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/top-view-delicious-baked-products_23-2149234903.jpg"
          imageAlt="Shivshankar Bakery products"
          logoText="Shivshankar Bakery"
          copyrightText="© 2025 Shivshankar Bakery. All rights reserved."
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#home" },
                { label: "Our Specialties", href: "#specialties" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#testimonials" }
              ]
            },
            {
              title: "Visit Us",              items: [
                { label: "Address: CJRW+C7Q, Nasirabad Rd, Nagra, Ajmer, Rajasthan 305001", href: "#" },
                { label: "Phone: 080031 52800", href: "tel:08003152800" },
                { label: "Opens: 10:00 AM Daily", href: "#" },
                { label: "Price Range: ₹200–₹400 per person", href: "#" }
              ]
            },
            {
              title: "Information",              items: [
                { label: "Fresh Baked Daily", href: "#" },
                { label: "Premium Quality", href: "#" },
                { label: "Custom Cakes", href: "#" },
                { label: "Contact Us", href: "#contact" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}