export interface Member {
  id: number;
  name: string;
  member_id: string;
  email: string;
  phone: string;
  role: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  last_login: Date;
  description: string;
}

export interface GetMembersParams {
  page?: number;
  size?: number;
  search?: string;
  role?: string;
}

export interface CreateMemberRequest {
  name: string;
  member_id: string;
  email: string;
  phone: string;
  role: string;
  is_active: boolean;
  description: string;
  password: string;
  password_confirm: string;
}

export interface UpdateMemberRequest {
  memberId: string;
  name: string;
  member_id: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  is_active: boolean;
  description: string;
}
