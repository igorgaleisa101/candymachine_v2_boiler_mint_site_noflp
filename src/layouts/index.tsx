import React from "react";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  fullWidth = false,
}: {
  children: any;
  fullWidth: boolean;
}) {
  return (
    <Box className="min-h-screen text-white">
        <Header />
        <Box className="">
            {Boolean(fullWidth) ? (
            <Box id="page_container">{children}</Box>
            ) : (
            <div>
                <Box id="page_container">{children}</Box>
            </div>
            )}
        </Box>
        <Footer />
    </Box>
  );
}
