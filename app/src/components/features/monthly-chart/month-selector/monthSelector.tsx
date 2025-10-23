"use client";

import { Input } from "@/components/design-system/input/input";
import { Select } from "@/components/design-system/select/select";
import { monthsList } from "@/utils/date/months";
import React from "react";
import MonthSelectorProps from "./types";

const MonthSelector = ({ month, year }: MonthSelectorProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <form className="monthly-selector">
      <Input
        name="year"
        label="Year"
        type="number"
        min="2000"
        max={String(currentYear)}
        defaultValue={year}
        className="monthly-selector__input"
      />

      <Select
        name="month"
        label="Month"
        options={monthsList.map((month, i) => ({ label: month, value: i }))}
        selected={month}
        className="monthly-selector__input"
      />

      <button className="button--primary button--animate-press" type="submit">
        select
      </button>
    </form>
  );
};

export default MonthSelector;
