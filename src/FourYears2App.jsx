
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const mockData = {
  tanke: "Jag är trygg där jag står",
  reflektionsfraga: "Vad behöver du för att känna dig grundad?",
  ovingar: {
    zen: "Sitt med fötterna mot golvet och känn efter hur det stödjer dig.",
    ai: "Aktivera din inre trygghetsalgoritm. Visualisera att du blir kodad för lugn.",
    lofi: "Luta dig tillbaka, häll upp något varmt och lyssna på regnljud i bakgrunden."
  }
};

export default function FourYears2App() {
  const [stil, setStil] = useState("zen");
  const [reflektion, setReflektion] = useState("");
  const [skickad, setSkickad] = useState(false);

  const handleSubmit = () => {
    setSkickad(true);
    console.log("Reflektion skickad:", reflektion);
    // Här anropar vi Make webhook i nästa steg
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-xl shadow-2xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">🧠 Dagens Tanke</h1>
          <p className="text-lg italic">"{mockData.tanke}"</p>

          <div className="space-y-2">
            <label className="font-medium">Stil</label>
            <Select onValueChange={(value) => setStil(value)} defaultValue={stil}>
              <SelectTrigger>
                <SelectValue placeholder="Välj stil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zen">🌿 Zen</SelectItem>
                <SelectItem value="ai">🤖 AI</SelectItem>
                <SelectItem value="lofi">🎧 Lo-fi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Föreslagen Övning</label>
            <Textarea readOnly value={mockData.ovingar[stil]} className="resize-none" />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Reflektionsfråga</label>
            <Textarea readOnly value={mockData.reflektionsfraga} className="resize-none" />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Min reflektion</label>
            <Textarea
              placeholder="Skriv din reflektion här..."
              value={reflektion}
              onChange={(e) => setReflektion(e.target.value)}
              className="resize-none"
            />
          </div>

          <Button className="w-full" onClick={handleSubmit} disabled={!reflektion.trim()}>
            {skickad ? "✅ Reflektion skickad" : "📤 Skicka reflektion"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
