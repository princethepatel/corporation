import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomJoinedComponent } from './room-joined.component';

describe('RoomJoinedComponent', () => {
  let component: RoomJoinedComponent;
  let fixture: ComponentFixture<RoomJoinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomJoinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomJoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
