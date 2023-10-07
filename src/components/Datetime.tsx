import { LOCALE } from "@config";
import { TbCalendarHeart, TbClockHeart } from "react-icons/tb";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
  readingTime?: string;
}

export default function Datetime({ datetime, size = "sm", className, readingTime }: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <TbCalendarHeart
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-5 w-5`}
          aria-hidden="true"
      />
      <span className={`${size === "sm" ? "text-md" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
      <TbClockHeart
          className={`${
            size === "sm" ? "scale-90" : "scale-100"
          } inline-block h-5 w-5 `}
          aria-hidden="true"
      />
      <span className={`${size === "sm" ? "text-md" : "text-base"}`}>
        {readingTime}
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {date}
    </>
  );
};
