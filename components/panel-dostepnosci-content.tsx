"use client";

import React, { useState, useEffect } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  isDarkMode: boolean;
  lineSpacing: number;
  colorContrast: number;
  highlightLinks: boolean;
  stopAnimations: boolean;
}

export function AccessibilityPanelContent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    isDarkMode: false,
    lineSpacing: 1.5,
    colorContrast: 100,
    highlightLinks: false,
    stopAnimations: false,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    const {
      fontSize,
      isDarkMode,
      highContrast,
      lineSpacing,
      colorContrast,
      highlightLinks,
      stopAnimations,
    } = settings;

    document.body.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("high-contrast", highContrast);
    document.body.style.lineHeight = lineSpacing.toString();
    document.body.style.filter = `contrast(${colorContrast}%)`;
    document.body.classList.toggle("highlight-links", highlightLinks);
    document.body.classList.toggle("stop-animations", stopAnimations);

    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <Card className="fixed bottom-16 right-4 w-96 z-50 max-h-[80vh] overflow-y-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Panel dostępności</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Wysoki kontrast</span>
          <Switch
            checked={settings.highContrast}
            onCheckedChange={(checked) =>
              setSettings((prev) => ({ ...prev, highContrast: checked }))
            }
          />
        </div>
        <div className="space-y-2">
          <span>Rozmiar czcionki: {settings.fontSize}px</span>
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  fontSize: Math.max(prev.fontSize - 2, 12),
                }))
              }
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Slider
              value={[settings.fontSize]}
              onValueChange={(value) =>
                setSettings((prev) => ({ ...prev, fontSize: value[0] }))
              }
              min={12}
              max={24}
              step={1}
            />
            <Button
              size="icon"
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  fontSize: Math.min(prev.fontSize + 2, 24),
                }))
              }
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Additional settings */}
        <div className="flex items-center justify-between">
          <span>Tryb ciemny</span>
          <Switch
            checked={settings.isDarkMode}
            onCheckedChange={(checked) =>
              setSettings((prev) => ({ ...prev, isDarkMode: checked }))
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
