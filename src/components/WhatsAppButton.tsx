import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, RotateCcw, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "5565981135918";

const SERVICES = ["Ensaio fotográfico", "Evento", "Fotógrafo Mobile", "Videomaker"];
const OTHER_VALUE = "outros";

type Step = "form" | "success";

const whatsappLink = (message = "Olá, Soffia! Gostaria de saber mais sobre seu trabalho.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const FIELD =
  "w-full bg-transparent border border-border px-3 py-2.5 font-body text-sm text-foreground focus:border-primary outline-none transition-colors";
const LABEL = "font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5 block";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");

  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [outroServico, setOutroServico] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [lastLink, setLastLink] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  const resetForm = () => {
    setNome("");
    setServico("");
    setOutroServico("");
    setMensagem("");
    setError(null);
    setLastLink(null);
    setStep("form");
  };

  const close = useCallback(() => {
    setIsOpen(false);
    setNome("");
    setServico("");
    setOutroServico("");
    setMensagem("");
    setError(null);
    setLastLink(null);
    setStep("form");
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) close();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome.trim()) return setError("Informe seu nome.");
    if (!servico) return setError("Selecione o tipo de serviço.");
    if (servico === OTHER_VALUE && !outroServico.trim()) return setError("Descreva o serviço desejado.");

    const servicoLabel = servico === OTHER_VALUE ? outroServico.trim() : servico;

    const lines = [`Olá, Soffia! Me chamo *${nome.trim()}*.`, "", `*Assunto:* ${servicoLabel}`];
    if (mensagem.trim()) lines.push("", `*Mensagem:* ${mensagem.trim()}`);

    const link = whatsappLink(lines.join("\n"));

    // Abre no mesmo gesto de clique para evitar bloqueio de pop-up.
    window.open(link, "_blank", "noopener,noreferrer");

    setLastLink(link);
    setError(null);
    setStep("success");
  };

  return (
    <div ref={panelRef} className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="w-[calc(100vw-3rem)] max-w-sm overflow-hidden border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
              <div>
                <p className="font-display text-xl font-light leading-tight">Vamos conversar</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase opacity-80">
                  Resposta pelo WhatsApp
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="p-1 rounded-full transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {step === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="wa-nome" className={LABEL}>
                      Nome
                    </label>
                    <input
                      id="wa-nome"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className={FIELD}
                    />
                  </div>

                  <div>
                    <label htmlFor="wa-servico" className={LABEL}>
                      Serviço
                    </label>
                    <select
                      id="wa-servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className={`${FIELD} bg-background [color-scheme:dark]`}
                    >
                      <option value="" disabled className="bg-background text-muted-foreground">
                        Selecione um serviço
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-background text-foreground">
                          {s}
                        </option>
                      ))}
                      <option value={OTHER_VALUE} className="bg-background text-foreground">Outro</option>
                    </select>
                  </div>

                  {servico === OTHER_VALUE && (
                    <div>
                      <label htmlFor="wa-outro" className={LABEL}>
                        Qual serviço?
                      </label>
                      <input
                        id="wa-outro"
                        type="text"
                        value={outroServico}
                        onChange={(e) => setOutroServico(e.target.value)}
                        placeholder="Descreva o serviço"
                        className={FIELD}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="wa-mensagem" className={LABEL}>
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="wa-mensagem"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Conte um pouco sobre o seu projeto"
                      rows={3}
                      className={`${FIELD} resize-none`}
                    />
                  </div>

                  {error && <p className="font-body text-xs text-destructive">{error}</p>}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 bg-primary px-4 py-3 font-body text-xs tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                    Enviar no WhatsApp
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-4 py-2 text-center">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-display text-2xl font-light text-foreground">Mensagem pronta!</p>
                    <p className="mt-1 font-body text-sm text-muted-foreground">
                      O WhatsApp foi aberto com sua mensagem. Caso não tenha aberto, clique no botão abaixo.
                    </p>
                  </div>
                  <div className="flex w-full gap-2">
                    <a
                      href={lastLink ?? whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 bg-primary px-3 py-3 font-body text-xs tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Abrir
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex flex-1 items-center justify-center gap-2 border border-border px-3 py-3 font-body text-xs tracking-wider uppercase text-foreground transition-colors hover:border-foreground/40"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Enviar outra
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        aria-label={isOpen ? "Fechar chat do WhatsApp" : "Falar no WhatsApp"}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
