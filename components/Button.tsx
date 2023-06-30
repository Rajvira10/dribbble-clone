import Image from "next/image";
import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  type,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  bgColor,
  textColor,
}) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3 ${textColor || "text-white"} ${
        isSubmitting ? "bg-black/50" : bgColor || "bg-primary-purple"
      } rounded-xl text-sm font-medium max-wd:w-full`}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left" />}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right" />
      )}
    </button>
  );
};

export default Button;
