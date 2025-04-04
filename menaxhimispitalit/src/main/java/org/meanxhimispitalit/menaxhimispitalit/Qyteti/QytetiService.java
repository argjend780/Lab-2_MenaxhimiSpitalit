package org.meanxhimispitalit.menaxhimispitalit.Qyteti;

import org.springframework.stereotype.Service;
import java.util.List;
@Service
public interface QytetiService {

    QytetiEntity createQyteti(QytetiEntity qytetiEntity);

    QytetiEntity getQytetiById(Long id);

    List<QytetiEntity> getAllQytetet();
    void deleteQyteti(Long id);
}
