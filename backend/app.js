import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  const meals = await fs.readFile("./data/available-meals.json", "utf8");
  res.json(JSON.parse(meals));
});

app.post("/orders", async (req, res) => {
  const orderData = req.body.order;

  if (
    orderData === null ||
    orderData.items === null ||
    orderData.items.length === 0
  ) {
    return res.status(400).json({ message: "Missing data." });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === ""
  ) {
    return res.status(400).json({
      message: "Missing data: Email, name or street is missing.",
    });
  }

  orderData.customer["postal-code"] = 5800;
  orderData.customer.city = "Pleven";

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
  res.status(201).json({ message: "Order created!" });
});

app.post("/contacts", async (req, res) => {
  const contactData = req.body.contact;

  if (
    contactData.customer.email === null ||
    !contactData.customer.email.includes("@") ||
    contactData.customer.name === null ||
    contactData.customer.name.trim() === "" ||
    contactData.customer.message === null ||
    contactData.customer.message.trim() === ""
  ) {
    return res.status(400).json({
      message: "Missing data: Email, name or message is missing.",
    });
  }

  const newcontact = {
    ...contactData,
    id: (Math.random() * 1000).toString(),
  };

  const contacts = await fs.readFile("./data/contacts.json", "utf8");
  const allcontacts = JSON.parse(contacts);
  allcontacts.push(newcontact);
  await fs.writeFile("./data/contacts.json", JSON.stringify(allcontacts));
  res.status(201).json({ message: "Contact created!" });
});

/////////////////////////////////////////////////////////////////
app.post("/reservations", async (req, res) => {
  const reservationData = req.body.reservation;

  if (
    reservationData.customer.firstName === null ||
    reservationData.customer.firstName.trim() === "" ||
    reservationData.customer.lastName === null ||
    reservationData.customer.lastName.trim() === "" ||
    reservationData.customer.email === null ||
    !reservationData.customer.email.includes("@") ||
    reservationData.customer.date === "" ||
    reservationData.customer.people === "" ||
    reservationData.customer.people === null ||
    reservationData.customer.time === "" ||
    reservationData.customer.time === null
  ) {
    return res.status(400).json({
      message: "Missing data: Email, name, date, people or time is missing.",
    });
  }

  const newreservation = {
    ...reservationData,
    id: (Math.random() * 1000).toString(),
  };

  const reservations = await fs.readFile("./data/reservations.json", "utf8");
  const allreservations = JSON.parse(reservations);
  allreservations.push(newreservation);
  await fs.writeFile(
    "./data/reservations.json",
    JSON.stringify(allreservations)
  );
  res.status(201).json({ message: "Reservation created!" });
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
