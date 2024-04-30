
"use client"

import Navbar from "@/Components/Navbar";

import { parseISO } from "date-fns";
import { WeatherDetail,WeatherData } from "@/utils/data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "path";

export default function Home() {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const { data, isError, isLoading } = useQuery<WeatherData>({
    queryKey: ["weather"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=${apiKey}&cnt=56`
      );
      return data;
    },
  });

  const DayConverter = (firstData: string | undefined):string|undefined => {
    if (!firstData) return undefined;
    const todayDate: Date = new Date(firstData);
    const dayOfWeekNumber: number = todayDate.getDay();
    const daysOfWeek: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayOfWeekNumber];
  };

  const DateConverter = (firstData: string | undefined): string => {
    if (!firstData) return "";
    const [datePart, timePart] = firstData.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    const newDate: Date = new Date(year, month - 1, day);
    const formatedDate: string = `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;
    return formatedDate;
  };

  const firstData: string | undefined = data?.list[0]?.dt_txt;

  if (isError) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Error</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/*Today Data*/}
        <section>
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{DayConverter(firstData)}</p>
              <p>({DateConverter(firstData)})</p>
            </h2>
          </div>
        </section>
        {/*7 Day Forecast*/}
        <section></section>
      </main>
    </div>
  );
}
