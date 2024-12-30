import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getFeaturedJobs = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    
    const jobs = await prisma.job.findMany({
      where: {
        featured: true,
        ...(category !== 'All' && {
          category: {
            name: category as string,
          },
        }),
      },
      include: {
        category: true,
      },
    });
    
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching featured jobs' });
  }
};

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

export const applyToJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.body;
    
    // Mock successful application
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting application' });
  }
};
