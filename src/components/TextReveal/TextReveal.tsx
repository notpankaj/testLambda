import "./TextReveal.css";

const TextReveal = ({ text, stroke }: { text: string; stroke?: boolean }) => {
  return (
    <div className="text-container">
      {stroke ? (
        <span className="reveal-text stroke text-[3rem] xl:text-[5rem]">
          {text}
        </span>
      ) : (
        <span className="reveal-text text-[3rem] xl:text-[5rem]">{text}</span>
      )}
    </div>
  );
};

export default TextReveal;
