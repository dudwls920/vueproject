const URL = '/api'

const MENU_INFO_URL = `${URL}/menu-info`
const ADMIN_URL = `${URL}/admin`
const CALENDAR_URL = `${URL}/calendar`
const BASE_URL = `${URL}/base`
const BASE_MODULE_URL = `${URL}/base-module`
const PLAN_URL = `${URL}/plan`
const MAT_URL = `${URL}/mat`
const LOT_URL = `${URL}/lot`
// const WIP_URL = `${URL}/wip`
const WIP_PROD_RUN_URL = `${URL}/wip/prod-run`

const COMMON_UTIL_URL = `${URL}api/common/util`

const CUSTOM = '/customquery'

// BASE
const LOCATION = `${BASE_URL}/location`
const MAT = `${BASE_URL}/mat-item`
const PROD = `${BASE_URL}/prod-item`
const OPER = `${BASE_URL}/oper`
const ROUTE = `${BASE_URL}/route`
const SOP = `${BASE_URL}/item-route-sop`
const PARAM = `${BASE_URL}/param`
const COLLECTION = `${BASE_URL}/collection`
const CUSTOMER = `${BASE_URL}/customer`
const EQUIP = `${BASE_URL}/equip`
const USER = `${BASE_URL}/user`
const CODE = `${BASE_URL}/code`
const CODE_CLASS = `${BASE_URL}/code-class`
const FAB = `${BASE_URL}/fab`
const FAB_SHIFT = `${BASE_URL}/fab-shift`
const ROUTE_OPER = `${BASE_URL}/route-oper`
const BOM = `${BASE_URL}/item-route-bom`
const COLLECTION_PARAM = `${BASE_URL}/collection-param`
const ITEM_ROUTE = `${BASE_URL}/item-route`
const ITEM_ROUTE_BOM_URL = `${BASE_URL}/item-route-bom`

const CODE_COMBO = `${BASE_URL}/code/combo`

// BASE MODULE
const SOP_MODULE = `${BASE_MODULE_URL}/sop`

// PLAN
const PRODUCT_ORDER = `${PLAN_URL}/product-order`
const CUSTOM_PLAN = `${PLAN_URL}/customquery`
const WORK_ORDER = `${PLAN_URL}/work-order`
const PRODUCT_ORDER_DETAIL = `${PLAN_URL}/product-order-detail`
const WBS = `${PLAN_URL}/wbs`

// LOT
const HOLD_INFO = `${LOT_URL}/hold-info`

// MAT
const ORDER = `${MAT_URL}/order`
const ORDER_REQUEST = `${MAT_URL}/order-request`
const ORDER_APPROVAL = `${MAT_URL}/order-approval`
const WIP_RUN = `${MAT_URL}/wip-run`
const WIP_RUN_HIST = `${MAT_URL}/wip-run-hist`
const OUT = `${MAT_URL}/out`
const OUT_REQUEST = `${MAT_URL}/out-request`

// WIP
// const WIP_RUN_HIST = WIP_URL + "/wip-run-hist";

export default {
  API: {
    USER: {
      userInfo: `${URL}/user-info`,
      userGroupInfo: `${URL}/user-group-info`,
      userGroupMap: `${URL}/user-group-map`,
      userDefineLanguage: `${URL}/user-info/user-info-lang`,
    },
    MENU: {
      menuInfo: MENU_INFO_URL,
      parentMenuList: `${MENU_INFO_URL}/parent-menu-list`,
      menuTree: `${MENU_INFO_URL}/menu-tree`,
      updateMenuTree: `${MENU_INFO_URL}/update-menu-tree`,
    },
    ADMIN: {
      userNameAndUserGroupMap: `${ADMIN_URL}/user-name-and-user-group-map`,
      custom: `${ADMIN_URL + CUSTOM}/user-name-and-user-group-map`,
    },
    CALENDAR: {
      calendar: CALENDAR_URL,
    },
    BASE: {
      bom: BOM,

      collection: COLLECTION,
      collectionList: `${COLLECTION}/select-collection-list`,
      collectionParamList: `${COLLECTION}/selectCollectionParamList`,
      collectionCodeByCombo: `${COLLECTION}/select-collection-code-by-combo`,
      collectionParam: `${BASE_URL}/collection-param`,

      customer: CUSTOMER,
      baseCustomerList: `${CUSTOMER}/selectCustomerList`,
      customerList: `${CUSTOMER}/select-customer-list`,
      customerByCombo: `${CUSTOMER}/select-customer-by-combo`,
      findByCustomerName: `${CUSTOMER}/find-by-customer-name`,

      code: CODE,
      codeList: `${CODE}/select-code-list`,
      codeDefByCombo: `${CODE}/find-code-def-by-combo`,

      codeClass: CODE_CLASS,
      codeClassList: `${CODE_CLASS}/selectCodeClassList`,
      codeClassByCombo: `${CODE_CLASS}/find-code-class-by-combo`,

      equip: EQUIP,
      equipList: `${EQUIP}/select-equip-class-list`,
      equipByCombo: `${EQUIP}/select-equip-by-combo`,
      equipClassByCombo: `${EQUIP}/select-equip-class-by-combo`,

      fab: FAB,
      fabByCombo: `${FAB}/select-fab-by-combo`,
      test: `${FAB}/test`, // 파일업로드 테스트,

      selectFabByfabCode: `${FAB_SHIFT}/select-fab-by-fab-code`,

      routeOper: ROUTE_OPER,
      bomRouteOper: `${ROUTE_OPER}/select-bom-route-oper-list`,
      routeOperList: `${ROUTE_OPER}/selectRouteOperList`,

      paramCodeByCombo: `${COLLECTION_PARAM}/select-param-code-by-combo`,

      itemRouteBomList: `${ITEM_ROUTE_BOM_URL}/select-item-route-bom-list`,

      location: LOCATION,
      locationList: `${LOCATION}/selectLocationList`,
      locationByCombo: `${LOCATION}/select-location-by-combo`,
      selectLocationList: `${LOCATION}/select-location-list`,

      matItem: MAT,
      matItemList: `${MAT}/select-mat-item-list`,
      matItemByCombo: `${MAT}/select-mat-item-by-combo`,
      matItemRevByCombo: `${MAT}/select-mat-item-rev-by-combo`,
      selectMatItemList: `${MAT}/select-item-list`,

      oper: OPER,
      operList: `${OPER}/select-oper-list`,
      operByCombo: `${OPER}/select-oper-by-combo`,

      prodItem: PROD,
      prodItemByCombo: `${PROD}/select-prod-item-by-combo`,
      prodItemRevByCombo: `${PROD}/select-prod-item-rev-by-combo`,
      // prodItemList: BASE_URL + CUSTOM + "/selectProdItemList",
      prodItemList: `${PROD}/selectProdItemList`,

      param: PARAM,
      paramList: `${PARAM}/select-param-list`,

      route: ROUTE,
      routeList: `${ROUTE}/select-route-list`,

      routeByCombo: `${ROUTE}/select-route-by-combo`,

      sop: SOP,
      sopAttachments: `${SOP}/select-sop-attachments`,

      user: USER,
      userList: `${USER}/selectUserList`,
      userRole: `${BASE_URL}/user-role`,
      userCodeByCombo: `${BASE_URL}/select-user-code-by-combo`,

      workRouteList: `${ITEM_ROUTE}/select-wo-route-list`,

      // COMBO
      yn: `${CODE_COMBO}/YN`,
      locationType: `${CODE_COMBO}/LocationType`,
      matItemType: `${CODE_COMBO}/MatItemType`,
      matItemClass1: `${CODE_COMBO}/MatItemClass1`,
      matItemClass2: `${CODE_COMBO}/MatItemClass2`,
      matItemClass3: `${CODE_COMBO}/MatItemClass3`,
      prodItemType: `${CODE_COMBO}/prodItemType`,
      prodItemClass1: `${CODE_COMBO}/ProdItemClass1`,
      prodItemClass2: `${CODE_COMBO}/ProdItemClass2`,
      prodItemClass3: `${CODE_COMBO}/ProdItemClass3`,
      qtyUnit: `${CODE_COMBO}/QtyUnit`,
      validType: `${CODE_COMBO}/ValidType`,
      operType: `${CODE_COMBO}/OperType`,
      subOperType: `${CODE_COMBO}/SubOperType`,
      methodType: `${CODE_COMBO}/MethodType`,
      defaultEquipClass: `${CODE_COMBO}/DefaultEquipClass`,
      defaultSop: `${CODE_COMBO}/DefaultSop`,
      collectionType: `${CODE_COMBO}/CollectionType`,
      COL_VALIDTYPE: `${CODE_COMBO}/COL_VALIDTYPE`,
      customerType: `${CODE_COMBO}/CustomerType`,
      role: `${CODE_COMBO}/Role`,
      dept: `${CODE_COMBO}/Dept`,
      codeType: `${CODE_COMBO}/CodeType`,
      orderState: `${CODE_COMBO}/OrderState`,
      unitPriceUnit: `${CODE_COMBO}/UnitPriceUnit`,
      locationSource: `${CODE_COMBO}/Location`,
      subMethodTypeSource: `${CODE_COMBO}/SubMethodType`,
      deptData: `${CODE_COMBO}/dept`,
    },
    BASE_MODULE: {
      sopModule: SOP_MODULE,
      selectImage: `${SOP_MODULE}/selectImage`,
      uploadImage: `${SOP_MODULE}/uploadImage`,
    },
    PLAN: {
      plan: PLAN_URL,

      productOrder: PRODUCT_ORDER,
      prodDetail: PRODUCT_ORDER_DETAIL,

      custom: CUSTOM_PLAN,
      // poList: CUSTOM_PLAN + "/select-po-list",
      // woList: CUSTOM_PLAN + "/selectProdItemWoList",

      prodStatus: `${WORK_ORDER}/select-prod-status`,
      prodItemWorkList: `${WORK_ORDER}/select-prod-item-work-list`,
      dashBoardList: `${WORK_ORDER}/select-dashboard-list`,

      workOrder: WORK_ORDER,
      workOrderList: `${WORK_ORDER}/select-wo-list`,

      wbs: WBS,

      productOrderList: `${PRODUCT_ORDER}/select-po-list`,
      poDetailList: `${PRODUCT_ORDER_DETAIL}/select-po-detail-list`,
      // poDetailList: PRODUCT_ORDER_DETAIL + "/selectProductOrderList",
    },
    WIP_PROD_RUN: {
      wipProdRun: WIP_PROD_RUN_URL,

      generateLotId: `${WIP_PROD_RUN_URL}/generate-lot-id`,

      prodItemRunList: `${WIP_PROD_RUN_URL}/select-prod-item-run-list`,
      prodItemRun: `${WIP_PROD_RUN_URL}/select-prod-item-run`,

      selectLotList: `${WIP_PROD_RUN_URL}/select-lot-list`,
      selectMaxChildLotNo: `${WIP_PROD_RUN_URL}/select-max-child-lot-no`,
      selectSplitLotNoList: `${WIP_PROD_RUN_URL}/select-split-lot-no-list`,
    },
    LOT: {
      holdInfoList: `${HOLD_INFO}/select-hold-info-list`,
    },
    MAT: {
      generateApprovalNo: `${ORDER_APPROVAL}/generate-approval-no`,

      order: ORDER,
      orderReq: ORDER_REQUEST,
      orderList: `${ORDER}/select-order-list`,
      orderInquiry: `${ORDER}/select-order-inquiry`,
      orderRequestList: `${ORDER_REQUEST}/select-order-request-list`,

      orderApproval: ORDER_APPROVAL,
      orderApprovalList: `${ORDER_APPROVAL}/select-order-approval-list`,

      out: OUT,
      outList: `${OUT}/select-mat-out-list`,

      outReq: OUT_REQUEST,
      outRequestList: `${OUT_REQUEST}/select-mat-out-request-list`,

      wipRun: WIP_RUN,
      iqcLotList: `${WIP_RUN}/select-iqc-lot-list`,
      matRunList: `${WIP_RUN}/select-mat-run-list`,
      matLotHistory: `${WIP_RUN_HIST}/select-material-lot-history`,
    },
    COMMON_UTIL: {
      selectHistoryKey: `${COMMON_UTIL_URL}/select-history-key`,
    },
    // WIP: {
    //   lotList: WIP_RUN_HIST + "/select-lot-list",
    // },
  },
}
