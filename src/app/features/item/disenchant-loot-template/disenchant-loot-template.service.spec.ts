import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MysqlQueryService } from '@keira-shared/services/mysql-query.service';
import { MockedMysqlQueryService, MockedToastrService } from '@keira-testing/mocks';
import { ToastrService } from 'ngx-toastr';
import { instance } from 'ts-mockito';
import { ItemHandlerService } from '../item-handler.service';
import { DisenchantLootTemplateService } from './disenchant-loot-template.service';

describe('DisenchantLootTemplateService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: MysqlQueryService, useValue: instance(MockedMysqlQueryService) },
        { provide: ToastrService, useValue: instance(MockedToastrService) },
        ItemHandlerService,
        DisenchantLootTemplateService,
      ],
    }),
  );

  it('should be created', () => {
    const service: DisenchantLootTemplateService = TestBed.inject(DisenchantLootTemplateService);
    expect(service).toBeTruthy();
  });
});
