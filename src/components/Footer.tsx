import { LogoImg } from "@/components/LogoImg";
import { ArrowUp, ChevronRight, Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer
      className="w-full flex justify-center flex-col items-center bg-darkBase-950 border-t border-[#323539]"
      id="Contatos"
    >
      <div className="flex w-full max-w-6xl flex-col justify-between gap-16 px-4 pb-20 pt-16 sm:flex-row sm:gap-4">
        <div className="flex flex-col gap-4">
          <LogoImg className="w-[160px]" />

          <p className="text-[#979AA0] w-[300px]">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
        </div>

        <div className="flex gap-16 max-sm:flex-col">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold #F9F9F9 text-2xl">Links</h3>

            {["Início", "Sobre nós", "Serviços"].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-1 hover:cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-[#979AA0]" />

                  <p className="text-[#979AA0] font-medium">{item}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold #F9F9F9 text-2xl">Contatos</h3>

            <div className="flex items-center gap-2 hover:cursor-pointer">
              <Mail className="w-6 h-6 text-[#979AA0]" />

              <p className="text-[#979AA0] font-medium">
                contato@ecotruck.com.br
              </p>
            </div>

            <div className="flex items-center gap-2 hover:cursor-pointer">
              <Phone className="w-6 h-6 text-[#979AA0]" />

              <p className="text-[#979AA0] font-medium">(17) 99248-5665</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full flex-col items-center gap-4 border-t-2 border-[#323539] p-4">
        <p className="text-[#979AA0]">© 2024 Ecotruck. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export { Footer };
