import { LayoutDashboard, Server, ScrollText, Settings, Zap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "#dashboard", icon: LayoutDashboard },
  { title: "Usługi", url: "#services", icon: Server },
  { title: "Logi", url: "#logs", icon: ScrollText },
  { title: "Ustawienia", url: "#settings", icon: Settings },
];

interface AppSidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function AppSidebar({ activeSection, onNavigate }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          {!collapsed && (
            <span className="font-bold text-foreground text-sm tracking-wide">
              Admin<span className="text-primary">Panel</span>
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/60 uppercase text-[10px] tracking-widest">
            Nawigacja
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={activeSection === item.url}
                    tooltip={item.title}
                    onClick={() => onNavigate(item.url)}
                    className={
                      activeSection === item.url
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!collapsed && (
          <p className="text-[10px] text-muted-foreground/40 text-center">
            v1.0.0
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
