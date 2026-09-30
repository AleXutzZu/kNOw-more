export type ResponseId = 'accept' | 'decline' | 'delegate';

export interface ResponseImpact {
  psychological: string;
  career: string;
  reflection: string;
}

export interface ScenarioResponse {
  id: ResponseId;
  label: string;
  text: string;
  impact: ResponseImpact;
}

export interface Scenario {
  id: number;
  category: string;
  title: string;
  context: string;
  request: string;
  responses: ScenarioResponse[];
}

export const RESPONSE_LABELS: Record<ResponseId, string> = {
  accept: 'Accept the task',
  decline: 'Decline because of time',
  delegate: 'Suggest someone else',
};
