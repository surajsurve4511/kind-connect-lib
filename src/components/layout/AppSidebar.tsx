import {
  Home, Heart, Home as HomeIcon, DollarSign, Baby, Activity,
  Briefcase, Target, Users, Bot, Settings, ChevronLeft, ChevronRight
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const pillars = [
  { title: "Home", url: "/", icon: Home },
  { title: "Relationship", url: "/relationship", icon: Heart },
  { title: "Household", url: "/household", icon: HomeIcon },
  { title: "Finances", url: "/finances", icon: DollarSign },
  { title: "Family", url: "/family", icon: Baby },
  { title: "Health", url: "/health", icon: Activity },
  { title: "Career", url: "/career", icon: Briefcase },
  { title: "Future Planning", url: "/future", icon: Target },
  { title: "Social", url: "/social", icon: Users },
];

const extras = [
  { title: "AI Assistant", url: "/ai-assistant", icon: Bot },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-coral flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">LifeSync</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            {!collapsed && "Life Pillars"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pillars.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink to={item.url} end={item.url === "/"} className="hover:bg-muted/50 rounded-xl px-3 py-2" activeClassName="bg-primary/10 text-primary font-semibold">
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            {!collapsed && "Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {extras.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink to={item.url} className="hover:bg-muted/50 rounded-xl px-3 py-2" activeClassName="bg-primary/10 text-primary font-semibold">
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-muted/50">
              <div className="w-8 h-8 rounded-full gradient-coral flex items-center justify-center text-xs font-bold text-primary-foreground">A</div>
              <div className="w-8 h-8 rounded-full gradient-sky flex items-center justify-center text-xs font-bold text-primary-foreground">J</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">Alex & Jordan</p>
                <p className="text-[10px] text-muted-foreground">Synced ✓</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
