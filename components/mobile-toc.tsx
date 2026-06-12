"use client";

import React from "react";
import { List } from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  TableOfContents,
  type Heading,
} from "@/components/table-of-contents";
import { PromoContent } from "@/components/promo-content";

interface MobileTableOfContentsProps {
  headings?: Heading[];
}

export function MobileTableOfContents({
  headings = [],
}: MobileTableOfContentsProps) {
  return (
    <Drawer>
      <DrawerTrigger className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
        <List size={20} />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <h3 className="font-semibold">Table of Contents</h3>
        </DrawerHeader>

        <DrawerBody>
          <TableOfContents headings={headings} />
        </DrawerBody>

        <DrawerFooter>
          <PromoContent variant="mobile" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
