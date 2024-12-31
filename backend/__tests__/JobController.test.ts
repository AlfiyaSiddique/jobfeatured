import { PrismaClient } from '@prisma/client';
import { getFeaturedJobs, getCategories } from '../src/controllers/jobController';

const prisma = new PrismaClient();

describe('Job Controller', () => {
  beforeAll(async () => {
    // Setup test database
    await prisma.category.createMany({
      data: [
        { name: 'Acting' },
        { name: 'Photography' },
        { name: 'Dance' },
      ],
    });
  });

  afterAll(async () => {
    // Cleanup test database
    await prisma.job.deleteMany();
    await prisma.category.deleteMany();
    await prisma.$disconnect();
  });

  describe('getFeaturedJobs', () => {
    it('returns featured jobs for specific category', async () => {
      const req = {
        query: { category: 'Acting' },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await getFeaturedJobs(req as any, res as any);
      expect(res.json).toHaveBeenCalled();
    });

    it('returns all featured jobs when category is All', async () => {
      const req = {
        query: { category: 'All' },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await getFeaturedJobs(req as any, res as any);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
