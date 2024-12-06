import { useServicesContext } from "@/contexts/services";
import { servicesRouteMapping } from "@/utils";
import { useRouter } from "next/navigation";
import { DropdownMenu } from "./DropdownMenu";

// export interf/ace ServiceDropdown {
//   onChangel
// }
const ServicesDropdown = () => {
  const { services } = useServicesContext();
  const router = useRouter();
  const preparedServices: Array<{
    id: number;
    label: string;
  }> = services?.map((item) => ({
    id: item.id,
    label: servicesRouteMapping[item.id].name,
  }));

  const onClick = (id: number) => {
    if (servicesRouteMapping?.[id]?.slug)
      return router.push(`/services/${servicesRouteMapping[id].slug}`);

    router.push(`/services`);
  };
  preparedServices.unshift({ id: Math.random(), label: "Overview" });

  return (
    <DropdownMenu
      label={"Services"}
      options={preparedServices}
      onChangeMenu={onClick}
    />
  );
};

export { ServicesDropdown };
