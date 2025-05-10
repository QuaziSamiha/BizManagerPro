"use client";

import type React from "react";

import {
  HardHat,
  Construction,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { Progress } from "@radix-ui/react-progress";

export default function UnderDevelopment() {
  //   const [email, setEmail] = useState("");
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress] = useState(65);

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (email) {
  //       setIsSubmitted(true);
  //     }
  //   };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-blueActual">
              <Construction size={48} color="white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blueActual">
            Under Development
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We&apos;re working hard to bring you an amazing new feature. This
            section is currently under construction.
          </p>
        </div>

        <Card className="mb-8 border-0 shadow-lg overflow-hidden">
          <div className="py-4 px-6 flex items-center gap-2 text-white bg-blueActual">
            <HardHat size={20} />
            <h2 className="text-xl font-semibold">Development Progress</h2>
          </div>
          <CardContent className="p-6 bg-white">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Overall Completion</span>
                <span className="font-bold">{progress}%</span>
              </div>

              <div className="bg-silver rounded">
                <Progress
                  value={progress}
                  className="h-2 bg-blueActual rounded-l w-[60%]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-green-600" />
                <span>Design Phase</span>
                <Badge className="ml-auto bg-green-700 text-white">
                  Completed
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Construction size={20} className="text-blueActual" />
                <span>Backend Development</span>
                <Badge className="ml-auto bg-blueActual text-white">
                  In Progress
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Construction size={20} className="text-blueActual" />
                <span>Frontend Implementation</span>
                <Badge className="ml-auto bg-blueActual text-white">
                  In Progress
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-gray-400" />
                <span>Testing & QA</span>
                <Badge className="ml-auto" variant="outline">
                  Pending
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-green-600" />
                <span>Deployment</span>
                <Badge className="ml-auto bg-green-700 text-white">
                  Completed
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blueActual bg-opacity-20">
                  <Clock size={24} className="text-blueActual" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Expected Completion
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We&apos;re working diligently to complete this feature soon.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blueActual text-white">
                    Coming in 2 weeks
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-redActual bg-opacity-20">
                  <AlertTriangle size={24} className="text-redActual" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Why the Wait?</h3>
                  <p className="text-gray-600">
                    We&apos;re ensuring everything is perfect before launch.
                    Quality takes time!
                  </p>
                  <div className="mt-2">
                    <Link href={"/"}>
                      <Button
                        variant="link"
                        className="p-0 h-auto flex items-center gap-1 text-redActual"
                      >
                        Learn more <ChevronRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <Card className="border-0 shadow-md overflow-hidden">
          <div
            className="py-3 px-6"
            style={{ backgroundColor: colors.blueActual, color: "white" }}
          >
            <h3 className="font-semibold flex items-center gap-2">
              <Bell size={18} />
              Get Notified When We Launch
            </h3>
          </div>
          <CardContent className="p-6">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  style={{ backgroundColor: colors.blueActual }}
                  className="transition-colors hover:bg-[#032e73]"
                >
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 size={20} />
                <span>
                  Thank you! We&apos;ll notify you when this feature launches.
                </span>
              </div>
            )}
          </CardContent>
        </Card> */}

        <Separator className="my-8" />

        <div className="text-center">
          <p className="mb-4">
            In the meantime, you can explore other sections of our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={"/"}>
              <Button className="bg-white hover:bg-blue-50 border border-blueActual text-blueActual">
                Return to Home
              </Button>
            </Link>
            <Link href={"https://atilimited.net/"}>
              <Button className="hover:bg-red-100 hover:text-redActual bg-redActual">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
