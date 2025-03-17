import DashboardWrapper from "@/component/organisms/DashboardWrapper";


export default function DashboardLayout({ children }) {
  return (
   <DashboardWrapper>
      {children}
   </DashboardWrapper>
  );
}
