import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Express } from 'express';

@Injectable()
export class CourseService {
  private courses = [
    { id: '1', name: 'Web Technology', code: 'CS101', credits: 3, instructor: 'Dr. Rahman' },
    { id: '2', name: 'Data Structure', code: 'CS102', credits: 3, instructor: 'Dr. Karim' },
    { id: '3', name: 'Artificial Intelligence', code: 'CS103', credits: 3, instructor: 'Dr. Hasan' },
    { id: '4', name: 'Database Systems', code: 'CS104', credits: 2, instructor: 'Dr. Alam' },
    { id: '5', name: 'Computer Networks', code: 'CS105', credits: 3, instructor: 'Dr. Islam' },
  ];

  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    const course = this.courses.find(c => c.id === id);
    if (!course) {
      return {
        message: 'No course found',
        id: id,
      };
    }
    return {
      message: 'Course fetched successfully',
      id: id,
      data: course,
    };
  }

  createCourse(dto: CreateCourseDto) {
    const newCourse = {
      id: String(this.courses.length + 1),
      name: dto.name,
      code: dto.code,
      instructor: dto.instructor,
      credits: dto.credits,
    };
    this.courses.push(newCourse);
    return {
      message: 'Course created successfully',
      data: newCourse,
    };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    const course = this.courses.find(c => c.id === id);
    if (!course) {
      return {
        message: 'Course not found',
        id: id,
      };
    }

    if (dto.name) course.name = dto.name;
    if (dto.code) course.code = dto.code;
    if (dto.instructor) course.instructor = dto.instructor;
    if (dto.credits) course.credits = dto.credits;

    return {
      message: 'Course updated successfully',
      id: id,
      data: course,
    };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
  const course = this.courses.find(c => c.id === id);
  if (!course) {
    return {
      message: 'Course not found',
      id: id,
    };
  }

  const updatedFields: string[] = []; 

  // Patch only provided fields
  if (dto.name) {
    course.name = dto.name;
    updatedFields.push('name');
  }
  if (dto.code) {
    course.code = dto.code;
    updatedFields.push('code');
  }
  if (dto.instructor) {
    course.instructor = dto.instructor;
    updatedFields.push('instructor');
  }
  if (dto.credits) {
    course.credits = dto.credits;
    updatedFields.push('credits');
  }

  return {
    message: 'Course patched successfully',
    id: id,
    updatedFields: updatedFields,
  };
}

  deleteCourse(id: string) {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) {
      return {
        message: 'Course not found',
        id: id,
      };
    }
    this.courses.splice(index, 1);
    return {
      message: 'Course deleted successfully',
      id: id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    const course = this.courses.find(c => c.id === id);
    if (!course) {
      return {
        message: 'Course not found',
        id: id,
      };
    }

    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: file.path,
    };
  }
}