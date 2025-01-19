export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET '
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0sth21tn',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const projectToken = assertValue(
  process.env.SANITY_TOKEN || 'sksc2bRFIVU0xjueO8XMDQ5CBQmk9N0xq5dx430PSFx9THvUYF117gsU357LOHM6dB9Y37WA7WlzRKSHSoZVLKSbdseMuZW37vH2AtX0xdxesV1nq1pEn6ifhFEmQdGs25wpSDCCAi5MizqIhuIe6DwuzsLYMEDMoHCEbR6CoXD44nVms4cp',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    console.error(errorMessage); // Log the error for debugging
    throw new Error(errorMessage);
  }
  return v;
}
