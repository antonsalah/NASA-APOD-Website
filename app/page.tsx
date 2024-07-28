"use client";
import Description from "@/componets/description";
import MainImg from "@/componets/mainImg";
import MainTitle from "@/componets/title";
import { getData } from "./getData";
import React, { useState, useEffect } from "react";
import type { ApiResponseType } from "./getData";
import {DateSelector} from "@/componets/dateSelector";

export function formatDate(date: Date): string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default function HomePage() {
    const [data, setData] = useState<ApiResponseType>();
  
    const fetchData = async (date: string) => {
      const result = await getData(date);
      setData(result);
    };
  
    useEffect(() => {
      fetchData(formatDate(new Date()));
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="centered-container">
        <div className="box-container">
          <h1>Astronomy Photo of the Day!</h1>
          <MainTitle prop={data.imgTitle} />
          <MainImg url={data.imgUrl} />
          <br />
          <DateSelector onSubmit={fetchData} />
          <Description prop={data.imgDesc} />
        </div>
      </div>
    );
  }
