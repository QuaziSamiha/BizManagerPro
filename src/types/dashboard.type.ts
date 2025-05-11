export interface SubMenu {
  subMenuId: number;
  udSubMenuId: string;
  menuId: number;
  subMenuName: string;
  menuOrder: number;
  permissionLvl: string;
  route: string;
  menuIcon: string;
  isWelcomePage: number;
}

export interface IMenu {
  isContainSubMenu: number;
  isWelcomePage: number;
  menuIcon: string;
  menuId: number;
  menuName: string;
  menuOrder: number;
  menuUId: string;
  permissionLvl: string;
  route: string;
  subMenuList: SubMenu[];
}

export interface IModule {
  open: boolean;
  moduleData: IMenu;
}
