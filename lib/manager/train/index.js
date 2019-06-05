import greeting from "./greeting";
import smalltalks from "./smalltalks";

export default async manager => {
  greeting(manager);
  smalltalks(manager);
  await manager.train();
  manager.save();
  return manager;
};
