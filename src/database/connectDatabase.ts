import debug from "debug";
import mongoose from "mongoose";

const createDebug = debug("dryStoneStructureFinder:database");

mongoose.set("strictQuery", false);

const connectDatabase = async (url: string) => {
  createDebug("Database conected");

  await mongoose.connect(url);
};

export default connectDatabase;