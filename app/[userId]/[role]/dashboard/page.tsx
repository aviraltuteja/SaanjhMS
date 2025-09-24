"use client";

import { loggedInUserAtom } from "@/app/store/user";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { Link, Copy } from "lucide-react";

export default function Dashboard(): React.ReactElement {
  const user = useAtomValue(loggedInUserAtom);
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateLink = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedLink(data.link);
      } else {
        console.error("Failed to generate link");
      }
    } catch (error) {
      console.error("Error generating link:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="p-8">
      <div className="text-2xl text-primary mb-6">Hi {user.name}</div>

      {user.role === "admin" && (
        <div className="bg-whiteshade rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blackshade mb-4">
            Admin Tools
          </h2>

          <button
            onClick={handleGenerateLink}
            disabled={isGenerating}
            className="bg-primary text-whiteshade px-6 py-3 rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <Link size={20} />
            {isGenerating ? "Generating..." : "Generate New Link"}
          </button>

          {generatedLink && (
            <div className="mt-4 p-4 bg-greyshade rounded-lg">
              <p className="text-blackshade font-medium mb-2">
                Generated Link:
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 p-2 border border-gray-300 rounded text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-secondary text-blackshade px-3 py-2 rounded hover:bg-yellow-500 transition-colors flex items-center gap-1">
                  <Copy size={16} />
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
