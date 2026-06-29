import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService: CourseService){}

    @Get()
    getAllCources(){
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseByID(@Param('id') id:string){
        return this.courseService.getCourseByID(id);
    }

    @Post()
    createCourse(){
        return this.courseService.creatCourse();
    }

    @Put(':id')
    updateCourse(@Param('id')id:string){
        return this.courseService.updateCourse(id);
    }

    @Patch(':id')
    patchCourse(@Param('id')id:string){
        return this.courseService.patchCouse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id')id:string){
        return this.courseService.deleteCourse(id);
    }
    
}
