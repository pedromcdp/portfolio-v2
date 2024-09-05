import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollValue } from "@/hooks";

const Hero = () => {
  const { scrollYValue } = useScrollValue();

  return (
    <section
      id="hero"
      className="relative flex flex-col items-start justify-center grow mx-6 min-h-[calc(100vh-4rem)] max-w-[100vw]"
    >
      <div className="relative flex gap-10 flex-1 items-center">
        <div className="flex-col self-end py-20 gap-2 hidden sm:flex">
          <Button
            as={Link}
            href="https://github.com/pedromcdp"
            target="_blank"
            variant="light"
            radius="sm"
            isIconOnly
          >
            <Github />
          </Button>

          <Button
            as={Link}
            href="https://linkedin.com/in/pedromcdp"
            target="_blank"
            variant="light"
            radius="sm"
            isIconOnly
          >
            <Linkedin />
          </Button>
        </div>
        <div className="w-full flex flex-col sm:flex-row grow flex-1 lg:justify-between items-center lg:px-10 gap-4 transition-all duration-75 ease-linear">
          <div className="order-2 sm:order-none text-left text-xl font-medium flex flex-col gap-2">
            <h1 className="text-5xl font-bold pb-4">
              Hello! I&apos;m <span className="text-primary">Pedro</span>
            </h1>
            <p className="">Frontend Developer</p>
            <p className="w-full sm:w-3/4 text-wrap">
              Building Beautiful, User-Friendly Websites with a Focus on
              <span className="text-primary"> Quality</span> and{" "}
              <span className="text-primary">Detail</span>.
            </p>
            <div className="mt-4 lg:mt-10 flex flex-col md:flex-row gap-2 lg:gap-4">
              <Button
                color="primary"
                variant="bordered"
                className="w-full sm:w-48 text-lg h-12"
                radius="sm"
                href="/Pedro_Miguel_Pereira_2024.pdf"
                as="a"
                download
              >
                <FileDown size={20} />
                Download CV
              </Button>
              <Button
                as={Link}
                color="primary"
                className="w-full sm:w-48 text-lg h-12"
                radius="sm"
                href="mailto:contact@pedrocruto.pt"
              >
                <Mail size={20} />
                Contact me
              </Button>
            </div>
          </div>
          <div className="relative select-none w-64 h-64 md:w-96 md:h-96 xl:w-[30rem] xl:h-[30rem] flex-none transition-all ease-in-out">
            <Image
              src="/1x1.webp"
              alt="Pedro Cruto"
              fill
              className="rounded-full object-cover border-primary/70 border-3 p-0.5  pointer-events-none"
            />
          </div>
        </div>
      </div>
      <motion.div
        animate={
          scrollYValue > 100
            ? { opacity: 0, scale: 0.9 }
            : { opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.5 }}
        className="hidden sm:flex absolute bottom-0 py-2 w-full justify-center animate-bounce"
      >
        <span>(scroll down)</span>
      </motion.div>
    </section>
  );
};

export { Hero };
