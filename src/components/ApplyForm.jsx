"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import ReactSelect from "react-select";

import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string(),
  emailAddress: z.string().email(),
  address: z.string(),
  city: z.string(),
  phone: z.string(),
  dob: z.string().date(),
  gender: z.enum(["male", "female"]),
  qualifications: z.string(),
  courses: z.array(z.string()),
});

const options = [
  { value: "cakedecor", label: "Cake Decorator" },
  { value: "bakercert", label: "Baker Certificate" },
  { value: "dressmaker", label: "Dress Maker" },
  { value: "hennadesigner", label: "Henna Designer" },
  { value: "cityandguilds", label: "City & Guilds Courses" },
  { value: "wilton", label: "Wilton Courses" },
];

export function ApplyForm() {
  // Define the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      address: "",
      city: "",
      phone: +94,
      dob: "",
      gender: "",
      qualifications: "",
      courses: [""],
    },
  });

  const [submitted, setSubmitted] = useState(false);

  // Submit handler
  function onSubmit(values) {
    console.log(values);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="courses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Courses</FormLabel>
              <FormControl>
                <ReactSelect
                  options={options}
                  isSearchable={false}
                  isMulti={true}
                  name="courses"
                  value={options.filter((option) =>
                    field.value.includes(option.value)
                  )} // Ensure selected values are properly reflected
                  onChange={(selectedOptions) =>
                    field.onChange(
                      selectedOptions.map((option) => option.value)
                    )
                  } // Extract values
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Full Name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Email Address" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Current Address" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="City" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Date of Birth</FormLabel>
                <FormControl className="">
                  <Input {...field} placeholder="Select" type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qualifications</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write a brief description of your current qualifications"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
        {submitted && <p className="text-green-600">Successfully Submitted!</p>}
      </form>
    </Form>
  );
}
