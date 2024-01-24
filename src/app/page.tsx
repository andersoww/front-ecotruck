"use client";
import { NavBar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import {
  ArrowRight,
  BusFront,
  Radio,
  Tractor,
  TrafficCone,
} from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "@/components/Button";
import Screen from "../../public/screen.png";
import { CardQuestion } from "@/components/CardQuestion";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex min-h-screen flex-col pt-[100px] h-full scroll-smooth bg-[#000]">
      <NavBar />
      <Section className="max-w-full overflow-hidden" id="Início">
        <div className="bg-[url('/repeated-square-dark.webp')] absolute w-full h-full z-10" />
        <div className="flex flex-col items-center z-30 py-20 px-28 max-w-7xl max-sm:px-4">
          <p className="bg-goldPoppy-600 text-sm font-semibold text-center w-fit rounded-full px-2 py-0.5 mb-3.5">
            Monitoramento
          </p>

          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold text-center w-[520px] max-sm:text-3xl max-sm:w-full">
              Inteligência em gestão de pneus.
            </h1>

            <p className="text-[#979AA0] font-normal text-lg max-w-[680px] w-full text-center max-sm:text-md">
              A única solução completa capaz de informar em tempo real a
              temperatura, a pressão, a localização e a quilometragem acumulada
              em cada pneu. Onde quer que ele esteja. Rodando ou não!
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-9 max-sm:flex-col max-sm:w-full">
            <Button className="max-sm:[&>button]:text-xs [&>button]:w-full">
              Get Started
            </Button>
            <Button
              variants="secondary"
              className="max-sm:[&>button]:text-xs [&>button]:w-full [&>button]:flex [&>button]:items-center [&>button]:gap-2 [&>button]:justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-7xl w-full h-[280px] max-sm:h-[180px] relative z-30 flex justify-center items-center overflow-hidden scale-[1.20]">
          <Image
            src="/mac.png"
            alt="Mac"
            width={700}
            height={100}
            className="w-full absolute inset-y-0 max-sm:w-[800px]"
          />
          <Image
            src={Screen}
            alt="screen"
            width={800}
            height={400}
            className="absolute rounded-lg w-[75%] inset-y-0 mt-8 max-md:mt-4"
            style={{ objectFit: "fill" }}
          />
        </div>
      </Section>

      <Section className="max-w-full w-full" id="Sobre nós">
        <div
          className="w-full flex justify-center px-4 my-32 max-w-7xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="flex border border-darkTwo rounded-lg bg-darkBase-950/50 p-8 w-full flex-col gap-4 h-fit shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-goldPoppy-600 rounded-lg" />
              <h1 className="text-3xl font-bold text-left w-full max-sm:text-3xl max-sm:w-full text-[#f9f9f9]">
                Sobre nós
              </h1>
            </div>

            <p className="text-[#979AA0] font-normal text-lg w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              eius veniam dolores quo deserunt? Quibusdam autem veritatis eos
              iure, distinctio molestias ex non, expedita corporis quisquam,
              cumque iusto quam quasi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo consectetur atque quisquam voluptatum
              mollitia incidunt enim dicta qui error. Perspiciatis minima
              adipisci quae repudiandae, magnam doloribus magni eveniet corporis
              recusandae! Quo consectetur atque quisquam voluptatum mollitia
              incidunt enim dicta qui error. Perspiciatis minima adipisci quae
              repudiandae, magnam doloribus magni eveniet corporis recusandae!
              Quo consectetur atque quisquam voluptatum mollitia incidunt enim
              dicta qui error. Perspiciatis minima adipisci quae repudiandae,
              magnam doloribus magni eveniet corporis recusandae!
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 px-4 my-32">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-center max-sm:text-3xl max-sm:w-full">
              Frequently Asked Questions
            </h1>

            <p className="text-[#979AA0] font-normal text-lg max-w-[680px] w-full text-center max-sm:text-md">
              Our FAQ area is the best place to look to find answers to your
              questions. Our community and support team constantly updates the
              questions and answers.
            </p>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 max-sm:grid-cols-1">
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="01"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="02"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="03"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="04"
            />
          </div>
        </div>
      </Section>

      <Section id="Serviços">
        <div
          className="flex flex-col gap-16 pt-16 p-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-6 w-full">
            <h1 className="text-3xl font-bold text-center max-sm:text-2xl">
              Nossos serviços
            </h1>

            <p className="text-[#979AA0] font-normal text-lg max-w-[680px] text-center w-full max-sm:text-md">
              Here’s a quick overview of our main features and what we have to
              offer. For more in-depth reviews, browse around our website and
              articles.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-3 w-full p-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {[
              { service: "Administração de inventário" },
              {
                service: "Rastreio em caso de roubo",
              },
              {
                service: "Aumente a vida dos pneus da sua frota",
              },
              {
                service: "Gestão de revisões e recauchutagens",
              },
              {
                service: "Controle de desgaste",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-6 px-8 rounded-xl bg-darkBase-950 border border-[#323539] min-w-[320px] shadow-lg hover:bg-darkBase-900 transition-all hover:scale-[1.01] duration-500"
                >
                  <div className="flex items-center justify-center bg-goldPoppy-600 rounded-md p-3 w-fit">
                    <Radio className="h-8 w-8" />
                  </div>

                  <div className="flex flex-col gap-2 pt-6">
                    <h3 className="font-semibold text-lg text-[#F9F9F9]">
                      {item.service}
                    </h3>

                    <p className="text-[#979AA0] font-normal">
                      Rest easy knowing your data is protected with robust
                      security measures, including encryption, secure user
                      access.
                    </p>
                  </div>

                  <button className="border border-[#323539] bg-[#2B2D2F] px-5 py-3 rounded-md mt-6 flex gap-2 items-center">
                    <p className="text-[#F9F9F9] text-sm">Saiba mais</p>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <div
          className="flex flex-col items-center gap-16 pt-16 pb-24"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl max-sm:text-2xl font-bold text-center">
            Principais segmentos
          </h1>

          <div className="flex w-full gap-16 max-lg:flex-col flex-row">
            <div className="grid grid-cols-2 gap-12 max-sm:grid-cols-1 items-center">
              {[
                {
                  segment: "Agro",
                  icon: <Tractor className="text-[#F9F9F9]" />,
                },
                {
                  segment: "Rodoviário",
                  icon: <TrafficCone className="text-[#F9F9F9]" />,
                },
                {
                  segment: "Passageiros",
                  icon: <BusFront className="text-[#F9F9F9]" />,
                },
              ].map((item, index) => {
                return (
                  <div
                    className="flex flex-col gap-4 w-full max-sm:items-center "
                    key={index}
                  >
                    <div className="flex items-center justify-center h-12 w-12 border border-darkTwo rounded-full bg-darkBase-950">
                      {item.icon}
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-2xl text-[#F9F9F9]">
                        {item.segment}
                      </h3>

                      <p className="text-[#979AA0] font-normal w-[350px]">
                        Rest easy knowing your data is protected with robust
                        security measures, including encryption, secure user
                        access.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-md:p-4">
              <Image
                src="/truck.webp"
                alt=""
                width={500}
                height={500}
                className="w-[500px] h-full object-cover rounded-lg max-lg:w-full"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
