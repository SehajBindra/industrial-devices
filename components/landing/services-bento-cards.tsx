"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export type ServiceBentoCardProps = {
  index: number;
  reduceMotion: boolean;
};

type ServiceBentoCardShellProps = ServiceBentoCardProps & {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
  href?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const PRODUCT_IMAGES = {
  gasChlorinator: "/product/vacuum-chlorinator-bg-white.png",
  chlorineVaporizer: "/product/gas-chlorinators-bg-white.png",
  leakDetectionSafety: "/product/leak-detection-safety-bg-white.png",
  vacuumRegulators: "/product/chlorination-system-accessories-spares-bg-white.png",
  chlorineDioxide: "/client-list/chlorine-dioxide-generator.jpg",
  electroChlorination: "/product/electrochlorinator-bg-white.png",
  chemicalDosingSystem: "/client-list/chemical-dosing-system.jpg",
} as const;

function ProductBentoImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1300}
      height={1000}
      priority={priority}
      quality={90}
      sizes={sizes}
      className="h-auto w-full max-h-52 rounded-md object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-56"
    />
  );
}

function ServiceBentoCardShell({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePriority = false,
  href,
  index,
  reduceMotion,
}: ServiceBentoCardShellProps) {
  const card = (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.52, ease, delay: index * 0.045 }}
      className="group relative flex h-full flex-col rounded-md border border-neutral-200 bg-white p-5 shadow-[0_22px_70px_rgba(0,0,0,0.045)] transition-colors duration-300 hover:border-neutral-300 sm:p-6"
    >
      <div className="relative z-10 flex w-full flex-col">
        <div className="overflow-hidden rounded-md">
          <ProductBentoImage
            alt={imageAlt}
            priority={imagePriority}
            src={imageSrc}
          />
        </div>

        <div className="mt-6 pt-1">
          <h3 className="text-2xl font-medium tracking-tight text-primary">
            {title}
          </h3>
          <p
            className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base"
            title={description}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );

  if (!href) {
    return card;
  }

  return (
    <Link
      href={href}
      className="block h-full cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
    >
      {card}
    </Link>
  );
}

export function ConsultingAdvisoryBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Highly accurate vacuum-operated gas chlorination systems for drinking water, wastewater, cooling water, and industrial treatment."
      href="/gas-chlorination"
      imageAlt="Gas chlorinator CW skid with evaporator and control panel by Industrial Devices"
      imagePriority
      imageSrc={PRODUCT_IMAGES.gasChlorinator}
      title="Gas chlorinators"
    />
  );
}

export function IndustrialSafetyBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Heavy-duty vaporizers that safely convert liquid chlorine into gas for medium and high-capacity chlorination systems."
      href="/chlorine-vaporizer"
      imageAlt="Vacuum chlorinator units with control panel and flowmeter by Industrial Devices"
      imageSrc={PRODUCT_IMAGES.chlorineVaporizer}
      title="Chlorine vaporizers"
    />
  );
}

export function TrainingDevelopmentBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Leak monitoring, alarms, scrubbers, absorption systems, emergency kits, and operator safety solutions for chlorine handling."
      href="/safety-system"
      imageAlt="Chlorine heater JB skid with XP chamber safety equipment"
      imageSrc={PRODUCT_IMAGES.leakDetectionSafety}
      title="Leak detection & safety"
    />
  );
}

export function AuditsAssessmentsBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Chlorination system accessories like Gas Chlorination System , these include Tonner Lifting
Beams, Weighing Systems, etc. Spares for the system

that include precision-engineered ejectors, vacuum regulators
other chlorination accessories"
      imageAlt="Dual-stream vacuum regulator and gas metering skid"
      imageSrc={PRODUCT_IMAGES.vacuumRegulators}
      title="Chlorination System Accessories &amp; Spares"
    />
  );
}

export function SoftwareItBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Advanced ClO2 generators for superior disinfection, odour control, biofilm removal, and organic contamination treatment."
      imageAlt="Chlorine dioxide generator with NaClO2 and HCl storage tanks, reactor, and control panel"
      imageSrc={PRODUCT_IMAGES.chlorineDioxide}
      title="Chlorine dioxide generators"
    />
  );
}

export function ElectroChlorinationBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="On-site chlorine generation for seawater and brine applications, with skid-mounted capacities from 5 g/hr to 500 kg/hr."
      href="/chlorine-dosing-system"
      imageAlt="Electrochlorination system with dual electrolyzers, rectifier, and process piping"
      imageSrc={PRODUCT_IMAGES.electroChlorination}
      title="Electro chlorination systems"
    />
  );
}

export function ChemicalDosingSystemBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      description="Automated setup designed to precisely measure, mix, and dose measured quantities of chemicals into a process stream. It eliminates manual handling, preventing overdosing and underdosing, equipment damage, and reduced processing efficiency."
      imageAlt="Chemical dosing system with storage tanks, pumps, and automated metering skid"
      imageSrc={PRODUCT_IMAGES.chemicalDosingSystem}
      title="Chemical dosing systems"
    />
  );
}
