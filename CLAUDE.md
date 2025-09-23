# FSD 리팩토링 규칙

# FSD(Feature-Sliced Design) 리팩토링 규칙

## 📁 디렉토리 구조 및 계층 규칙

### 계층 순서 (하위 → 상위)
shared < entities < features < widgets < pages < app

### 🚫 중요: 계층 간 의존성 규칙
- **하위 레이어는 상위 레이어를 절대 import할 수 없습니다**
- **상위 레이어만 하위 레이어를 import할 수 있습니다**
- **같은 레이어 내에서는 서로 import 가능하지만 권장하지 않음**

### 허용되는 Import 방향
```
app → pages → widgets → features → entities → shared
```

### 금지되는 Import 예시
```typescript
// ❌ 절대 금지
// shared에서 상위 레이어 import
import { SomeFeature } from '@/features/...'

// ❌ entities에서 상위 레이어 import  
import { SomeWidget } from '@/widgets/...'

// ❌ features에서 상위 레이어 import
import { SomePage } from '@/pages/...'
```

## 📂 각 레이어별 역할 및 규칙

### `shared/` - 공유 자원 (최하위)
- **역할**: 순수한 공유 자원 (UI 컴포넌트, 유틸, API 클라이언트 등)
- **Import 규칙**: 다른 레이어를 절대 import하지 않음
- **구조**:
  ```
  shared/
    ui/           # 원자적 UI 컴포넌트 (Button, Input 등)
    lib/          # 공용 유틸리티
    api/          # API 클라이언트
    config/       # 설정, 상수
    assets/       # 이미지, 아이콘
    styles/       # 글로벌 CSS
  ```

### `entities/` - 도메인 엔티티
- **역할**: 비즈니스 도메인의 핵심 엔티티 (상담사, 지점, 게시글 등)
- **Import 규칙**: `shared`만 import 가능
- **구조**: `model/`, `lib/` 폴더로 구성

### `features/` - 사용자 기능
- **역할**: 사용자 행동/기능 단위 (블로그 모달, 평점 주기, 예약 폼 등)
- **Import 규칙**: `shared`, `entities`만 import 가능
- **구조**: `ui/`, `model/`, `lib/` 폴더로 구성

### `widgets/` - 페이지 섹션
- **역할**: 페이지의 큰 섹션들 (헤더, 푸터, 히어로, 위치 등)
- **Import 규칙**: `shared`, `entities`, `features`만 import 가능
- **구조**: `ui/`, `model/`, `lib/` 폴더로 구성

### `pages/` - 페이지 조립
- **역할**: App Router 페이지 구성 (위젯과 피처를 조합)
- **Import 규칙**: 하위 모든 레이어 import 가능
- **특징**: 서버 컴포넌트로 데이터 로딩 및 페이지 조립

### `processes/` - 사용자 여정
- **역할**: 복잡한 사용자 여정 (예약 플로우 등)
- **Import 규칙**: 하위 모든 레이어 import 가능

### `app/` - Next.js App Router
- **역할**: Next.js의 파일 기반 라우팅
- **Import 규칙**: 모든 레이어 import 가능

## 🎯 리팩토링 가이드라인

### Public API 패턴
각 슬라이스는 `index.ts`를 통해 public API를 노출:
```typescript
// features/blog-modal/index.ts
export { BlogModal } from './ui/BlogModal'
export { useBlogModal } from './model/hooks'
export type { BlogModalProps } from './model/types'
```

### Import 경로 규칙
```typescript
// ✅ 올바른 import
import { Button } from '@/shared/ui/button'
import { Branch } from '@/entities/branch'
import { BlogModal } from '@/features/blog-modal'

// ❌ 잘못된 import (내부 구현 직접 접근)
import { BlogModal } from '@/features/blog-modal/ui/BlogModal'
```

### 파일 네이밍 규칙
- 컴포넌트: `PascalCase.tsx`
- CSS 모듈: `ComponentName.module.css`
- 유틸리티: `camelCase.ts`
- 타입: `types.ts`
- 훅: `hooks.ts` 또는 `use*.ts`

## 🔍 코드 리뷰 체크리스트

### 의존성 검사
1. **계층 규칙 준수**: 하위 레이어가 상위 레이어를 import하지 않는가?
2. **Public API 사용**: 내부 구현을 직접 import하지 않고 index.ts를 통해 접근하는가?
3. **적절한 레이어 배치**: 각 코드가 올바른 레이어에 위치하는가?

### 리팩토링 우선순위
1. **Import 의존성 정리**: 계층 규칙 위반 사항 수정
2. **Public API 구성**: 각 슬라이스의 index.ts 작성
3. **코드 이동**: 잘못된 레이어에 있는 코드를 적절한 위치로 이동
4. **중복 코드 제거**: shared 레이어로 공통 코드 추출

## 🚨 자주 하는 실수

1. **Shared 레이어에서 상위 import**: shared는 순수해야 함
2. **Entity에서 Feature import**: 도메인 엔티티는 기능에 의존하지 않음  
3. **Feature 간 직접 의존**: 필요시 상위 레이어에서 조합
4. **내부 구현 직접 접근**: 반드시 public API 사용

## 💡 개발 팁

- 새 기능 개발 시 어떤 레이어에 속하는지 먼저 결정
- 의존성 그래프를 그려보며 순환 참조 방지
- 각 레이어의 책임을 명확히 구분
- 테스트 코드도 같은 구조로 작성

# 새로운 기능 추가할 때 참고

## UI 컴포넌트 생성.

css.module을 활용해서 우선적으로 생성

## 패키지매니저

패키지 매니저는 pnpm을 사용해서 관리

## 인터렉티브 UI

Framer를 활용해서 인터렉티브 UI를 구현

// React
import { motion } from "framer-motion"

// React Server Components
import * as motion from "framer-motion/client"