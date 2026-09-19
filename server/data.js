const verifiedAt = '2026-09-01T00:00:00.000Z';

export const clinics = [
  {
    id: 'lumii-demo-bangkok-1', name_th: 'LUMII ฟังก์ชันทดสอบ กรุงเทพ',
    name_en: 'LUMII Bangkok Feature Demo', province_code: '10', province_th: 'กรุงเทพมหานคร',
    district: 'Watthana', subdistrict: 'Khlong Tan Nuea', entity_kind: 'unclassified',
    medical_status: 'demo_only', verification_status: 'not_verified', operating_status: 'unknown',
    last_verified_at: null, resultType: 'organic', isAdvertisement: false,
    recommendationReason: '기능 검증용 예시입니다. 실제 의료기관 정보가 아니며 예약할 수 없습니다.',
  },
  {
    id: 'lumii-demo-chiangmai-1', name_th: 'LUMII ฟังก์ชันทดสอบ เชียงใหม่',
    name_en: 'LUMII Chiang Mai Feature Demo', province_code: '50', province_th: 'เชียงใหม่',
    district: 'Mueang Chiang Mai', subdistrict: null, entity_kind: 'unclassified',
    medical_status: 'demo_only', verification_status: 'not_verified', operating_status: 'unknown',
    last_verified_at: null, resultType: 'organic', isAdvertisement: false,
    recommendationReason: '기능 검증용 예시입니다. 실제 의료기관 정보가 아니며 예약할 수 없습니다.',
  },
  {
    id: 'lumii-demo-phuket-1', name_th: 'LUMII ฟังก์ชันทดสอบ ภูเก็ต',
    name_en: 'LUMII Phuket Feature Demo', province_code: '83', province_th: 'ภูเก็ต',
    district: 'Mueang Phuket', subdistrict: null, entity_kind: 'unclassified',
    medical_status: 'demo_only', verification_status: 'not_verified', operating_status: 'unknown',
    last_verified_at: null, resultType: 'organic', isAdvertisement: false,
    recommendationReason: '기능 검증용 예시입니다. 실제 의료기관 정보가 아니며 예약할 수 없습니다.',
  },
];

export const skus = [
  demoSku('lumii-demo-lifting', '리프팅 정보 비교 예시', 'lifting', clinics[0], 590000, 490000, 4.8, 128),
  demoSku('lumii-demo-skin', '피부 관리 정보 비교 예시', 'skin', clinics[1], 320000, 280000, 4.7, 94),
  demoSku('lumii-demo-body', '바디 관리 정보 비교 예시', 'body', clinics[2], 450000, null, 4.6, 76),
];

function demoSku(id, name, category, clinic, listPrice, promoPrice, rating, reviewCount) {
  return {
    id, name, category, clinicName: clinic.name_en, clinicId: clinic.id,
    doctorLegalName: '', doctorLicenseNo: '', doctorNickname: '검증 전', quantity: 1,
    quantityUnit: '회', deviceBrand: '검증 전', genuineCertified: false, performer: 'consultation',
    downtimeDays: 0, listPrice, promoPrice, totalPrice: promoPrice ?? listPrice,
    priceUpdatedAt: null, priceStatus: 'missing', priceIncludes: [], priceExcludes: [],
    isSponsored: false, sponsorshipLabel: null,
    recommendationReason: 'UI와 저장 기능을 확인하기 위한 예시 데이터이며 실제 가격·시술·기관 정보가 아닙니다.',
    unitPrice: promoPrice ?? listPrice, reviewCount, rating, stationCode: '', walkMin: 0,
    verifiedAt,
  };
}

export const homeModules = [
  { key: 'M3', title: '안전하게 비교하기', items: [
    { id: 'guide-source', title: '출처와 확인일을 먼저 보세요', subtitle: '기관·가격·면허 정보는 확인일과 근거가 표시된 항목만 신뢰하세요.', category: 'guide' },
    { id: 'guide-consult', title: '시술 전 의료진 상담이 우선입니다', subtitle: '온라인 정보는 진단이나 처방을 대신하지 않습니다.', category: 'guide' },
    { id: 'guide-ads', title: '광고와 일반 결과를 구분합니다', subtitle: '유료 노출은 광고 라벨과 표시 이유가 함께 제공되어야 합니다.', category: 'guide' },
  ] },
  { key: 'M4', title: '기능 검증용 비교 예시', items: skus.map((sku, index) => ({ ...sku, skuId: sku.id, rank: index + 1 })) },
];

export function findClinic(id) { return clinics.find((item) => item.id === id) || null; }
export function findSku(id) { return skus.find((item) => item.id === id) || null; }

