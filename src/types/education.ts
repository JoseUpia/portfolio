export interface AcademicEvidence {
  title: string;
  description: string;
  certificateSlug: string;
  preview: string;
}

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
  detail: string;
  status?: string;
  evidence?: AcademicEvidence;
}
