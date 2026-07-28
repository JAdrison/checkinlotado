import videoAsset from "@/assets/case-video/case1-video.mp4.asset.json";
import posterAsset from "@/assets/case-video/case1-poster.jpg.asset.json";

const VideoCase = () => {
  return (
    <section style={{ background: "#050505" }} className="py-14 sm:py-20 px-4 sm:px-7">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        {/* Left — vertical video */}
        <div className="reveal">
          <div
            className="relative rounded-sm overflow-hidden mx-auto"
            style={{
              maxWidth: 380,
              aspectRatio: "9 / 16",
              background: "#0B0908",
              border: "1px solid rgba(230,179,106,0.24)",
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
            }}
          >
            <video
              src={videoAsset.url}
              poster={posterAsset.url}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-sm" style={{ background: "#E6B36A" }}>
              <span className="text-[0.65rem] uppercase tracking-[0.24em] font-label font-bold text-cream">
                Depoimento real
              </span>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="reveal">
          <div className="label-text mb-3">Case em vídeo</div>
          <h2 className="font-heading text-[1.6rem] sm:text-[clamp(1.9rem,4vw,3rem)] text-night leading-[1.15] mb-5">
            O Método <em className="shimmer-text font-extrabold">aplicado na prática</em>, contado por quem viveu
          </h2>
          <p className="text-night/75 text-sm sm:text-base leading-relaxed mb-4">
            Um relato direto de quem colocou o Check-in Lotado para rodar na operação — sem roteiro,
            sem edição, só o que mudou de verdade na rotina de vendas da hospedagem.
          </p>
          <p className="text-night/65 text-sm sm:text-base leading-relaxed">
            Aperte o play e veja como o método se traduz em decisões concretas: calendário organizado,
            campanhas alinhadas ao público certo e reservas chegando pelos canais próprios.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "rgba(230,179,106,0.24)" }} />
            <span className="text-ochre/80 text-[0.7rem] uppercase tracking-[0.24em] font-label">
              Case 01 · Hospedagem parceira
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(230,179,106,0.24)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCase;
